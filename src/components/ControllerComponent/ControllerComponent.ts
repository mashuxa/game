import { Event } from "../../types/events";
import { calculateCircleCoordinates, shuffleArray } from "../../utils/utils";
import template, { CONTROLLER_WIDTH } from "./template";

interface ListenerData {
  type: string;
  listener: EventListener;
}

export class ControllerComponent extends HTMLElement {
  private letters: string[];
  private selected: HTMLElement[];
  private pointerdown: boolean;

  private letterListeners: Map<HTMLElement, ListenerData[]>;
  private readonly controllerNode: Element | null;
  private selectedLetters: Element | null;

  constructor() {
    super();
    this.letters = [];
    this.selected = [];
    this.pointerdown = false;
    this.letterListeners = new Map();

    this.innerHTML = template;
    this.controllerNode = this.querySelector(".controller-letters");
    this.selectedLetters = this.querySelector("selected-letters-component");
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get selectedWord(): string {
    return this.selected.map((element) => element.innerText.toLowerCase()).join("");
  }

  dispatchWordCheck(): void {
    const event = new CustomEvent(Event.wordCheck, { detail: this.selectedWord, composed: true });

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
    // todo: clear selected letters, animation???
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

  addListeners(): void {
    document.addEventListener("pointerdown", this.setPointerDown);
    document.addEventListener("pointerup", this.setPointerUp);
  }
  removeListeners(): void {
    document.removeEventListener("pointerdown", this.setPointerDown);
    document.removeEventListener("pointerup", this.setPointerUp);

    this.letterListeners.forEach((listeners, element) => {
      listeners.forEach(({ type, listener }) => {
        element.removeEventListener(type, listener);
      });
    });
    this.letterListeners.clear();
  }

  connectedCallback(): void {
    this.addListeners();
  }
  disconnectedCallback(): void {
    this.removeListeners();
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
      const listenersData = [
        { type: "pointerdown", listener: this.onPointerDown as EventListener },
        { type: "pointerenter", listener: this.onPointerIn as EventListener },
      ];

      this.letterListeners.set(letterNode, listenersData);
      listenersData.forEach(({ type, listener }) => letterNode.addEventListener(type, listener));

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
