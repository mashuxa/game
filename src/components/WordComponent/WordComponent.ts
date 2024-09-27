import { cellMarginPx, light, maxAppWidth, success, wordCellMaxSize } from "../../styles/theme";

export class WordComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return ["data", "max-size"];
  }

  get letters(): string[] {
    return this.getAttribute("data")?.split("") || [];
  }

  get maxSize(): number {
    return Number(this.getAttribute("max-size"));
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    const wrapper = document.createElement("div");

    wrapper.setAttribute("part", "word-cell-wrapper");
    wrapper.classList.add("letter-list");

    this.letters.forEach((letter) => {
      const element = document.createElement("div");
      const cellWidth = `min(100vw, 100vh, ${maxAppWidth})/${this.maxSize} - ${cellMarginPx * 2}px`;

      element.classList.add("cell");
      element.setAttribute("part", "word-cell");
      element.style.backgroundColor = letter.trim() ? success : light;
      element.style.width = `calc(${cellWidth})`;
      element.style.margin = `${cellMarginPx}px`;
      element.style.fontSize = `min(calc((${cellWidth})*0.568), ${wordCellMaxSize})`;
      element.innerHTML = letter.trim();
      wrapper.appendChild(element);
    });
    this.innerHTML = "";
    this.append(wrapper);
  }
}

customElements.define("word-component", WordComponent);
