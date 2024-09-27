import { maxAppWidth } from "../../styles/theme";
import { Event } from "../../types/events";

export class WinScreenComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = ` 
    <main part="win-screen-wrapper" style="max-width: ${maxAppWidth}">
        <div>
          <h1 part="win-screen-title">Уровень ${this.getAttribute("level")} пройден</h1>
          <p part="win-screen-subtitle">Изумительно!</p>
        </div>
        <button part="win-screen-button">Уровень ${Number(this.getAttribute("level")) + 1}</button>
    </main>
    `;
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

customElements.define("win-screen-component", WinScreenComponent);
