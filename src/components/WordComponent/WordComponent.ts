import { COLOR_LIGHT, COLOR_SUCCESS } from "../../styles/theme";

export class WordComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return ["data"];
  }

  get letters(): string[] {
    return this.getAttribute("data")?.split("") || [];
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

      element.setAttribute("part", "word-cell");
      element.style.backgroundColor = letter.trim() ? COLOR_SUCCESS : COLOR_LIGHT;
      element.innerHTML = letter.trim();
      wrapper.appendChild(element);
    });

    this.innerHTML = "";
    this.append(wrapper);
  }
}

customElements.define("word-component", WordComponent);
