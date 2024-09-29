import { MAX_APP_WIDTH } from "../../styles/theme";
import { AppEvent } from "../../types/events";

export class WinScreenComponent extends HTMLElement {
  constructor() {
    super();
  }

  handleClick(): void {
    const event = new CustomEvent(AppEvent.incrementLevel, { bubbles: true });

    this.dispatchEvent(event);
  }

  connectedCallback(): void {
    this.render();
    this.addEventListener("pointerdown", this.handleClick);
  }

  render(): void {
    this.innerHTML = ` 
      <main part="win-screen-wrapper" style="max-width: ${MAX_APP_WIDTH}">
          <div>
            <h1 part="win-screen-title">Уровень ${this.getAttribute("level")} пройден</h1>
            <p part="win-screen-subtitle">Изумительно!</p>
          </div>
          <button part="win-screen-button">Уровень ${Number(this.getAttribute("level")) + 1}</button>
      </main>
    `;
  }
}

customElements.define("win-screen-component", WinScreenComponent);
