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

    wrapper.setAttribute("part", "controller-selected-letters");
    this.letters.forEach((letter) => {
      const cell = document.createElement("div");
      const cellWidth = `min(100vw, 100vh, 640px)/${this.letters.length} - 6px`;

      cell.setAttribute("part", "controller-selected-letter");
      cell.style.width = `calc(${cellWidth})`;
      cell.innerHTML = letter;
      wrapper.appendChild(cell);
    });

    this.innerHTML = "";
    this.appendChild(wrapper);
  }
}

customElements.define("selected-letters-component", SelectedLettersComponent);
