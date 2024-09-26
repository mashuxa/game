import { shuffleArray } from "../../utils/utils";
import template, { CONTROLLER_WIDTH } from "./template";

export class ControllerComponent extends HTMLElement {
  private selectedLettersNode: Element | null;
  private readonly controllerNode: Element | null;
  private selectedLetters: string[];

  constructor() {
    super();
    this.selectedLetters = [];
    this.innerHTML = template;
    this.selectedLettersNode = this.querySelector("selected-letters-component");
    this.controllerNode = this.querySelector(".controller-letters");
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get letters(): string[] {
    return (this.getAttribute("letters") || "").split("");
  }

  connectedCallback(): void {
    this.selectedLettersNode?.setAttribute("letters", this.selectedLetters.join(""));
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    if (!this.controllerNode) return;

    this.controllerNode.innerHTML = "";
    shuffleArray(this.letters).forEach((letter, index, arr) => {
      const letterNode = document.createElement("div");
      const radius = CONTROLLER_WIDTH / 2;
      const angle = (index / arr.length) * 2 * Math.PI - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      letterNode.setAttribute("part", "controller-letter");
      letterNode.innerHTML = letter;

      this.controllerNode?.appendChild(letterNode);

      setTimeout(() => {
        letterNode.style.transform = `translate(${x}px, ${y}px)`;
      }, 100);
    });
  }
}

customElements.define("controller-component", ControllerComponent);
