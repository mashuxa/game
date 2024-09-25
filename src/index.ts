import "./components/ButtonComponent";
import "./components/TitleComponent";
import "./styles/main.scss";
import { Event } from "./types/events";
import { joinLettersMaps, sortStringByAscending } from "./utils/utils";

const LEVEL_SETS_COUNT = 3;

interface WordsSet {
  words: string[];
}

export class App extends HTMLElement {
  private titleNode: Element | null;
  public level: number;
  private wordSet: Set<string>;
  private letterSet: Map<string, number>;

  constructor() {
    super();
    this.level = 1;
    this.wordSet = new Set();
    this.letterSet = new Map();

    this.attachShadow({ mode: "open" }).innerHTML = this.template;
    this.titleNode = this.shadowRoot ? this.shadowRoot.querySelector("title-component") : null;
    void this.updateWordSet();
  }

  get template(): string {
    return `
        <title-component level="${this.level}"></title-component>
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

    this.wordSet = new Set(words.sort(sortStringByAscending));
    this.letterSet = words.reduce(joinLettersMaps, new Map());

    console.warn(this.wordSet, this.letterSet);
  }

  connectedCallback(): void {
    this.addEventListener(Event.incrementLevel, this.incrementLevel);
  }

  disconnectedCallback(): void {
    this.removeEventListener(Event.incrementLevel, this.incrementLevel);
  }
}

customElements.define("app-component", App);
