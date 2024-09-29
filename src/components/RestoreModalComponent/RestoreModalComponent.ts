import { Event } from "../../types/events";
import template from "./RestoreModalComponent.template";

export class RestoreModalComponent extends HTMLElement {
  private button: Element | null;

  constructor() {
    super();

    this.button = null;
  }

  dispatchBroadcastEvent(): void {
    const event = new CustomEvent(Event.restoreGame, { bubbles: true });

    this.dispatchEvent(event);
  }

  connectedCallback(): void {
    this.innerHTML = template;
    this.button = this.querySelector("button");
    this.button?.addEventListener("pointerdown", this.dispatchBroadcastEvent);
  }
}

customElements.define("restore-modal-component", RestoreModalComponent);
