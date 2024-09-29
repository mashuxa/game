import { MAX_APP_WIDTH } from "../../styles/theme";

export class SelectedLettersComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get letters(): string[] {
    return (this.getAttribute("letters") || "").split("");
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    const wrapper = document.createElement("div");
    const cellWidth = `calc(min(100%, ${MAX_APP_WIDTH})/${this.letters.length})`;

    wrapper.setAttribute("part", "controller-selected-wrapper");
    this.letters.forEach((letter) => {
      const cell = document.createElement("div");

      cell.setAttribute("part", "controller-selected-letter");
      cell.style.width = cellWidth;
      cell.innerHTML = letter;
      wrapper.appendChild(cell);
    });

    this.innerHTML = "";
    this.appendChild(wrapper);
  }
}

customElements.define("selected-letters-component", SelectedLettersComponent);
