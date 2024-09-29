import { BroadcastEvent, Event } from "../../types/events";
import { collectLetters, sortStringByAscending } from "../../utils/utils";
import template from "./App.template";
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
    this.restoreGame();
  }

  restoreData(): void {
    const prevLevel = localStorage.getItem(LS_KEY_LEVEL);
    const prevWords = localStorage.getItem(LS_KEY_WORDS);

    if (prevLevel) this.level = Number(prevLevel);
    if (prevWords) this.visibleWords = new Set(prevWords.split(","));
  }

  restoreGame(): void {
    this.restoreData();
    void this.setupLevel();
  }

  async updateWordSet(): Promise<void> {
    const fileName = this.level % LEVEL_SETS_COUNT || LEVEL_SETS_COUNT;

    try {
      const response = await fetch(`./levels/${fileName}.json`);

      if (!response.ok) throw Error();

      const { words } = (await response.json()) as WordsSet;

      this.wordSet = words.sort(sortStringByAscending);
    } catch (e) {
      alert("Упс... Мы скоро все исправим. Попробуйте снова через несколько минут!");
      console.error(e);
    }
  }

  async setupLevel(): Promise<void> {
    await this.updateWordSet();

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = template;

      const title = this.shadowRoot.querySelector("title-component");
      const controller = this.shadowRoot.querySelector("controller-component");

      title?.setAttribute("level", this.level.toString());
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

  checkWord = (event: CustomEvent<string>): void => {
    const word = event.detail;

    if (this.wordSet.includes(word)) {
      this.visibleWords.add(word);
      this.renderWords();
      localStorage.setItem(LS_KEY_WORDS, Array.from(this.visibleWords).join());
    }

    if (this.wordSet.length === this.visibleWords.size && this.shadowRoot) {
      this.visibleWords.clear();
      this.shadowRoot.innerHTML = `<win-screen-component level="${this.level}"></win-screen-component>`;
    }
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
    this.shadowRoot?.addEventListener(Event.incrementLevel, this.incrementLevel);
    this.shadowRoot?.addEventListener(Event.wordCheck, this.checkWord as EventListener);
    this.shadowRoot?.addEventListener(Event.restoreGame, this.handleBroadcastRestore);
    this.broadcastChannel.postMessage({ event: BroadcastEvent.showRestoreModal });
    this.broadcastChannel.onmessage = this.onBroadcastChannelMessage;
  }

  renderWords(): void {
    const wordList = this.shadowRoot && this.shadowRoot.querySelector(".word-list");

    if (!this.shadowRoot || !wordList) return;

    const maxWordSize = this.wordSet[this.wordSet.length - 1].length;

    wordList.innerHTML = "";
    this.wordSet.forEach((word) => {
      const element = document.createElement("word-component");
      const data = this.visibleWords.has(word) ? word : word.replace(/./g, " ");

      element.setAttribute("data", data);
      element.setAttribute("max-size", maxWordSize.toString());
      wordList.appendChild(element);
    });
  }
}

customElements.define("app-component", App);
