import "./styles/main.scss";

export class App extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("app-component", App);
