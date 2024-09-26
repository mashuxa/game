const template = `
        <div part="controller-wrapper">
            <selected-letters-component letters=""></selected-letters-component>
            <div part="controller-letters"></div>   
        </div>`;

export class ControllerComponent extends HTMLElement {
  private selectedLettersNode: Element | null;
  private selectedLetters: string[];

  constructor() {
    super();
    this.selectedLetters = [];
    this.innerHTML = template;
    this.selectedLettersNode = this.querySelector("selected-letters-component");
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get letters(): string[] {
    return (this.getAttribute("letters") || "").split("");
  }
}

customElements.define("controller-component", ControllerComponent);
