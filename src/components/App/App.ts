import { Event } from "../../types/events";
import { collectLetters, sortStringByAscending } from "../../utils/utils";
import template from "./template";

const LEVEL_SETS_COUNT = 3;

interface WordsSet {
  words: string[];
}

export class App extends HTMLElement {
  private titleNode: Element | null;
  private readonly wordList: Element | null;
  private controller: Element | null;
  public level: number;
  private wordSet: string[];
  private readonly visibleWords: Set<string>;

  constructor() {
    super();
    this.level = 1;
    this.wordSet = [];
    this.visibleWords = new Set();

    this.attachShadow({ mode: "open" }).innerHTML = template;
    void this.updateWordSet();

    this.titleNode = this.shadowRoot && this.shadowRoot.querySelector("title-component");
    this.wordList = this.shadowRoot && this.shadowRoot.querySelector(".word-list");
    this.controller = this.shadowRoot && this.shadowRoot.querySelector("controller-component");
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
    this.controller?.setAttribute("letters", collectLetters(words).join(""));
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
      const data = this.visibleWords.has(word) ? word : word.replace(/./g, " ");

      element.setAttribute("data", data);
      element.setAttribute("max-size", maxWordSize.toString());
      this.wordList?.appendChild(element);
    });
  }
}

customElements.define("app-component", App);
