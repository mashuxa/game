export class TitleComponent extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return ["level"];
  }

  get level(): string {
    return this.getAttribute("level") || "";
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === "level" && oldValue !== newValue) {
      this.render();
    }
  }

  render(): void {
    this.innerHTML = `<h1 part="main-title">Уровень ${this.level}</h1>`;
  }
}

customElements.define("title-component", TitleComponent);
