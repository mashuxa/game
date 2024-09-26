import "./components/ButtonComponent/ButtonComponent";
import "./components/TitleComponent/TitleComponent";
import "./components/WordComponent/WordComponent";
import "./styles/main.scss";
import { Event } from "./types/events";
import { joinLettersMaps, sortStringByAscending } from "./utils/utils";

const LEVEL_SETS_COUNT = 3;

interface WordsSet {
  words: string[];
}

export class App extends HTMLElement {
  private titleNode: Element | null;
  private readonly wordList: Element | null;
  public level: number;
  private wordSet: string[];
  private readonly visibleWords: Set<string>;
  private letterSet: Map<string, number>;

  constructor() {
    super();
    this.level = 1;
    this.wordSet = [];
    //todo: to delete example word
    this.visibleWords = new Set(["брат", "тара"]);
    this.letterSet = new Map();

    this.attachShadow({ mode: "open" }).innerHTML = this.template;
    void this.updateWordSet();

    this.titleNode = this.shadowRoot && this.shadowRoot.querySelector("title-component");
    this.wordList = this.shadowRoot && this.shadowRoot.querySelector(".word-list");
  }

  get template(): string {
    return `
        <title-component level="${this.level}"></title-component>
        <div class="word-list"></div>
        <button-component></button-component>
    `;
  }

  incrementLevel(): void {
    this.level += 1;
    this.titleNode?.setAttribute("level", this.level.toString());
    void this.updateWordSet();
  }

  async updateWordSet(): Promise<void> {
    const fileName = this.level % LEVEL_SETS_COUNT || LEVEL_SETS_COUNT;
    //todo: add error handling
    const response = await fetch(`../levels/${fileName}.json`);
    const { words } = (await response.json()) as WordsSet;

    this.wordSet = words.sort(sortStringByAscending);
    this.letterSet = words.reduce(joinLettersMaps, new Map());
    this.renderWords();
  }

  connectedCallback(): void {
    this.addEventListener(Event.incrementLevel, this.incrementLevel);
  }

  disconnectedCallback(): void {
    this.removeEventListener(Event.incrementLevel, this.incrementLevel);
  }

  renderWords(): void {
    if (!this.shadowRoot || !this.wordList) return;

    const maxWordSize = this.wordSet[this.wordSet.length - 1].length;

    this.wordList.innerHTML = "";
    this.wordSet.forEach((word) => {
      const element = document.createElement("word-component");
      const data = this.visibleWords.has(word) ? word.toUpperCase() : word.replace(/./g, " ");

      element.setAttribute("data", data);
      element.setAttribute("max-size", maxWordSize.toString());
      this.wordList?.appendChild(element);
    });
  }
}

customElements.define("app-component", App);
