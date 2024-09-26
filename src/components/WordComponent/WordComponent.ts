import { light, maxWidth, success } from "../../styles/theme";

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

  connectedCallback(): void {}

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    this.render();
  }

  render(): void {
    const wrapper = document.createElement("div");

    wrapper.setAttribute("part", "cell-wrapper");
    wrapper.classList.add("letter-list");

    this.letters.forEach((letter) => {
      const element = document.createElement("div");
      const cellWidth = `min(100vw, 100vh, ${maxWidth})/${this.maxSize} - 6px`;

      element.classList.add("cell");
      element.setAttribute("part", "cell");
      element.style.backgroundColor = letter.trim() ? success : light;
      element.style.width = `calc(${cellWidth})`;
      element.style.fontSize = `min(calc((${cellWidth})*0.568), 42px)`;
      element.innerHTML = letter.trim();
      wrapper.appendChild(element);
    });
    this.innerHTML = "";
    this.append(wrapper);
  }
}

customElements.define("word-component", WordComponent);
