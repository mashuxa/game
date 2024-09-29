import { throttle } from "lodash";
import { COLUMN_GAP, WORD_CELL_MAX_SIZE } from "../../styles/theme";
import { AppEvent, BroadcastEvent } from "../../types/events";
import { collectLetters, sortStringByAscending } from "../../utils/utils";
import getTemplate from "./App.template";
import { LEVEL_SETS_COUNT, LS_KEY_LEVEL, LS_KEY_WORDS } from "./contants";
interface WordsSet {
  words: string[];
}

export class App extends HTMLElement {
  public level: number;
  private wordSet: string[];
  private visibleWords: Set<string>;
  private broadcastChannel: BroadcastChannel;

  constructor() {
    super();

    this.level = 1;
    this.wordSet = [];
    this.visibleWords = new Set();
    this.broadcastChannel = new BroadcastChannel("main");

    this.attachShadow({ mode: "open" });
    void this.restoreGame();
  }

  restoreData(): void {
    const prevLevel = localStorage.getItem(LS_KEY_LEVEL);
    const prevWords = localStorage.getItem(LS_KEY_WORDS);

    if (prevLevel) this.level = Number(prevLevel);
    if (prevWords) this.visibleWords = new Set(prevWords.split(","));
  }

  async restoreGame(): Promise<void> {
    this.restoreData();
    await this.setupLevel();
    this.checkAndHandleLevelCompletion();
  }

  async updateWordSet(): Promise<void> {
    const fileName = this.level % LEVEL_SETS_COUNT || LEVEL_SETS_COUNT;

    try {
      const response = await fetch(`./levels/${fileName}.json`);

      if (!response.ok) throw Error();

      const { words } = (await response.json()) as WordsSet;
      const uniqWords = Array.from(new Set(words));

      this.wordSet = uniqWords.sort(sortStringByAscending);
    } catch (e) {
      alert("Упс... Мы скоро все исправим. Попробуйте снова через несколько минут!");
      console.error(e);
    }
  }

  async setupLevel(): Promise<void> {
    await this.updateWordSet();

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = getTemplate(this.level);

      const controller = this.shadowRoot.querySelector("controller-component");

      controller?.setAttribute("letters", collectLetters(this.wordSet).join(""));
      this.renderWords();
    }
  }

  incrementLevel = (): void => {
    this.level += 1;
    void this.setupLevel();
    localStorage.setItem(LS_KEY_LEVEL, String(this.level));
    localStorage.removeItem(LS_KEY_WORDS);
  };

  checkAndHandleLevelCompletion(): void {
    if (this.wordSet.length === this.visibleWords.size && this.shadowRoot) {
      this.visibleWords.clear();
      this.shadowRoot.innerHTML = `<win-screen-component level="${this.level}"></win-screen-component>`;
    }
  }

  checkWord = (event: CustomEvent<string>): void => {
    const word = event.detail;

    if (this.wordSet.includes(word)) {
      this.visibleWords.add(word);
      this.renderWords();
      localStorage.setItem(LS_KEY_WORDS, Array.from(this.visibleWords).join());
    }

    this.checkAndHandleLevelCompletion();
  };

  onBroadcastChannelMessage = (event: MessageEvent<{ event: BroadcastEvent }>): void => {
    if (event.data.event === BroadcastEvent.showRestoreModal) {
      const modal = document.createElement("restore-modal-component");

      this.shadowRoot?.appendChild(modal);
    }
  };

  handleBroadcastRestore = (): void => {
    this.restoreGame();
    this.broadcastChannel.postMessage({ event: BroadcastEvent.showRestoreModal });
  };

  connectedCallback(): void {
    const throttledResize = throttle(() => this.renderWords(), 300);

    window.addEventListener("resize", throttledResize);
    this.shadowRoot?.addEventListener(AppEvent.incrementLevel, this.incrementLevel);
    this.shadowRoot?.addEventListener(AppEvent.wordCheck, this.checkWord as EventListener);
    this.shadowRoot?.addEventListener(AppEvent.restoreGame, this.handleBroadcastRestore);
    this.broadcastChannel.postMessage({ event: BroadcastEvent.showRestoreModal });
    this.broadcastChannel.onmessage = this.onBroadcastChannelMessage;
  }

  renderWords(): void {
    const wordList = this.shadowRoot && (this.shadowRoot.querySelector(".word-list") as HTMLElement);

    if (!this.shadowRoot || !wordList) return;

    const maxWordSize = this.wordSet[this.wordSet.length - 1].length;
    const rowsGap = COLUMN_GAP * (maxWordSize - 1);
    const cellHeight = `calc(100%/${this.wordSet.length})`;
    const cellWidth = `${(wordList.offsetWidth - rowsGap) / maxWordSize}px`;
    const rowHeight = `min(${cellHeight}, ${cellWidth}, ${WORD_CELL_MAX_SIZE}, 11.25vw)`;

    wordList.innerHTML = "";
    wordList.style.gridTemplateRows = `repeat(${this.wordSet.length}, minmax(0, ${rowHeight}))`;

    this.wordSet.forEach((word) => {
      const element = document.createElement("word-component");
      const data = this.visibleWords.has(word) ? word : word.replace(/./g, " ");

      element.setAttribute("data", data);
      wordList.appendChild(element);
      wordList.style.fontSize = `clamp(1rem, ${element.offsetHeight * 0.583}px, 42px)`;
    });
  }
}

customElements.define("app-component", App);
