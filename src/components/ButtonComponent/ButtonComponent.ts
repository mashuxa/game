import { Event } from "../../types/events";

export class ButtonComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<button>Increment Level</button>`;
  }

  handleClick(): void {
    const event = new CustomEvent(Event.incrementLevel, { composed: true });

    this.dispatchEvent(event);
  }

  connectedCallback(): void {
    this.addEventListener("pointerdown", this.handleClick);
  }

  disconnectedCallback(): void {
    this.removeEventListener("pointerdown", this.handleClick);
  }
}

customElements.define("button-component", ButtonComponent);
