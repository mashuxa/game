import { Event } from "../../types/events";
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

  constructor() {
    super();

    this.level = 1;
    this.wordSet = [];
    this.visibleWords = new Set();

    this.attachShadow({ mode: "open" });
    this.restoreData();
    void this.setupLevel();
  }

  restoreData(): void {
    const prevLevel = localStorage.getItem(LS_KEY_LEVEL);
    const prevWords = localStorage.getItem(LS_KEY_WORDS);

    if (prevLevel) this.level = Number(prevLevel);
    if (prevWords) this.visibleWords = new Set(prevWords.split(","));
  }

  handleIncrementLevel(): void {
    this.level += 1;
    void this.setupLevel();
    localStorage.setItem(LS_KEY_LEVEL, String(this.level));
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

  async updateWordSet(): Promise<void> {
    const fileName = this.level % LEVEL_SETS_COUNT || LEVEL_SETS_COUNT;

    try {
      const response = await fetch(`../levels/${fileName}.json`);

      if (!response.ok) throw Error();

      const { words } = (await response.json()) as WordsSet;

      this.wordSet = words.sort(sortStringByAscending);
    } catch (e) {
      alert("Упс... Мы скоро все исправим. Попробуйте снова через несколько минут!");
      console.error(e);
    }
  }

  handleWordCheck(event: CustomEvent<string>): void {
    if (this.wordSet.includes(event.detail)) {
      this.visibleWords.add(event.detail);
      this.renderWords();
      localStorage.setItem(LS_KEY_WORDS, Array.from(this.visibleWords).join());
    }

    if (this.wordSet.length === this.visibleWords.size && this.shadowRoot) {
      this.visibleWords.clear();
      this.shadowRoot.innerHTML = `<win-screen-component level="${this.level}"></win-screen-component>`;
    }
  }

  connectedCallback(): void {
    this.addEventListener(Event.incrementLevel, this.handleIncrementLevel);
    this.addEventListener(Event.wordCheck, this.handleWordCheck as EventListener);
  }

  disconnectedCallback(): void {
    this.removeEventListener(Event.incrementLevel, this.handleIncrementLevel);
    this.removeEventListener(Event.wordCheck, this.handleWordCheck as EventListener);
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
