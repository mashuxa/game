import { Event } from "../../types/events";
import { calculateCircleCoordinates, shuffleArray } from "../../utils/utils";
import template, { CONTROLLER_WIDTH } from "./ControllerComponent.template";

export class ControllerComponent extends HTMLElement {
  private letters: string[];
  private selected: HTMLElement[];
  private pointerdown: boolean;

  private controllerNode: Element | null;
  private selectedLetters: Element | null;

  constructor() {
    super();
    this.letters = [];
    this.selected = [];
    this.pointerdown = false;

    this.controllerNode = null;
    this.selectedLetters = null;
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get selectedWord(): string {
    return this.selected.map((element) => element.innerText.toLowerCase()).join("");
  }

  dispatchWordCheck(): void {
    const event = new CustomEvent(Event.wordCheck, { detail: this.selectedWord, bubbles: true });

    this.dispatchEvent(event);
  }

  setPointerDown = (): void => {
    this.pointerdown = true;
  };
  setPointerUp = (): void => {
    this.pointerdown = false;
    this.dispatchWordCheck();
    this.selected.forEach((node) => node.part.remove("selected"));
    this.selected = [];
    this.selectedLetters?.setAttribute("letters", "");
  };
  onPointerIn = ({ target }: PointerEvent): void => {
    const node = target as HTMLElement;

    if (this.pointerdown) {
      if (this.selected[this.selected.length - 2] === node) {
        this.selected.pop()?.part.remove("selected");
      } else if (!this.selected.includes(node)) {
        this.selected.push(node);
        node.part.add("selected");
      }

      this.selectedLetters?.setAttribute("letters", this.selectedWord);
    }
  };
  onPointerDown = ({ target }: PointerEvent): void => {
    const node = target as HTMLElement;

    this.selected.push(node);
    node.part.add("selected");
    this.selectedLetters?.setAttribute("letters", this.selectedWord);
  };

  connectedCallback(): void {
    this.innerHTML = template;
    this.controllerNode = this.querySelector(".controller-letters");
    this.selectedLetters = this.querySelector("selected-letters-component");

    document.addEventListener("pointerdown", this.setPointerDown);
    document.addEventListener("pointerup", this.setPointerUp);
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (name === "letters" && oldValue !== newValue) {
      this.letters = shuffleArray(newValue.split(""));
    }

    this.render();
  }

  render(): void {
    if (!this.controllerNode) return;

    this.controllerNode.innerHTML = "";
    this.letters.forEach((letter, index, arr) => {
      const letterNode = document.createElement("div");
      const { x, y } = calculateCircleCoordinates(CONTROLLER_WIDTH / 2, index / arr.length);

      letterNode.addEventListener("pointerdown", this.onPointerDown as EventListener);
      letterNode.addEventListener("pointerenter", this.onPointerIn as EventListener);

      letterNode.innerHTML = letter;
      letterNode.setAttribute("part", "controller-letter");
      this.controllerNode?.appendChild(letterNode);

      setTimeout(() => {
        letterNode.style.transform = `translate(${x}px, ${y}px)`;
      }, 100);
    });
  }
}

customElements.define("controller-component", ControllerComponent);
