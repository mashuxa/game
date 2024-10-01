import { COLUMN_GAP } from "../../styles/theme";
import { AppEvent } from "../../types/events";
import { calculateCirclePercentCoordinates, getCenterCoordinates, shuffleArray } from "../../utils/utils";
import template from "./ControllerComponent.template";

export class ControllerComponent extends HTMLElement {
  private letters: string[];
  private selected: HTMLElement[];
  private pointerdown: boolean;
  private linePath: number[][];

  private root: ShadowRoot;
  private controllerNode: Element | null;
  private selectedLetters: Element | null;
  private touchedLetter: Element | null;
  private lineNode: Element | null;

  constructor() {
    super();
    this.letters = [];
    this.selected = [];
    this.pointerdown = false;
    this.linePath = [];

    this.root = this.getRootNode() as ShadowRoot;
    this.controllerNode = null;
    this.selectedLetters = null;
    this.touchedLetter = null;
    this.lineNode = null;
  }

  static get observedAttributes(): string[] {
    return ["letters"];
  }

  get selectedWord(): string {
    return this.selected.map((element) => element.innerText.toLowerCase()).join("");
  }

  dispatchWordCheck(): void {
    const event = new CustomEvent(AppEvent.wordCheck, { detail: this.selectedWord, bubbles: true });

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
    this.lineNode?.setAttribute("d", "");
  };
  onPointerIn = ({ target }: PointerEvent): void => {
    const node = target as HTMLElement;

    if (this.pointerdown) {
      if (this.selected[this.selected.length - 2] === node) {
        this.selected.pop()?.part.remove("selected");
        this.linePath.pop();
      } else if (!this.selected.includes(node)) {
        const { x, y } = getCenterCoordinates(node);

        this.linePath = [...this.linePath, [x, y]];
        this.selected.push(node);
        node.part.add("selected");
      }

      this.selectedLetters?.setAttribute("letters", this.selectedWord);
    }
  };
  onPointerDown = ({ target }: PointerEvent): void => {
    const node = target as HTMLElement;
    const { x, y } = getCenterCoordinates(node);

    this.linePath = [[x, y]];
    this.selected.push(node);
    node.part.add("selected");
    this.selectedLetters?.setAttribute("letters", this.selectedWord);
  };
  handleTouch = (event: TouchEvent): void => {
    const { clientX, clientY } = event.touches[0];
    const element = this.root.elementFromPoint(clientX, clientY);
    const isControllerElement = element?.classList.contains("controller-letter");

    if (isControllerElement && element !== this.touchedLetter) {
      this.touchedLetter = element;
      this.onPointerIn({ target: element, clientX, clientY } as PointerEvent);
    }
  };
  renderLine = ({ clientX, clientY }: PointerEvent) => {
    if (this.pointerdown) {
      const pathData = [...this.linePath, [clientX, clientY]]
        .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
        .join(" ");

      this.lineNode?.setAttribute("d", pathData);
    }
  };

  connectedCallback(): void {
    this.innerHTML = template;
    this.controllerNode = this.querySelector(".controller-letters");
    this.selectedLetters = this.querySelector("selected-letters-component");
    this.lineNode = this.root.querySelector("#controller-dynamic-line");

    document.addEventListener("pointerdown", this.setPointerDown);
    document.addEventListener("mouseup", this.setPointerUp);
    document.addEventListener("touchend", this.setPointerUp);
    document.addEventListener("touchmove", this.handleTouch);
    document.addEventListener("pointermove", this.renderLine);
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
      const { x, y } = calculateCirclePercentCoordinates(index / arr.length);

      letterNode.addEventListener("pointerdown", this.onPointerDown as EventListener);
      letterNode.addEventListener("mouseenter", this.onPointerIn as EventListener);

      letterNode.innerHTML = letter;
      letterNode.setAttribute("part", "controller-letter");
      letterNode.classList.add("controller-letter");
      letterNode.style.maxWidth = `calc((3.14 * 100%)/${arr.length} - ${COLUMN_GAP}px)`;
      letterNode.style.left = "50%";
      letterNode.style.top = "50%";

      this.controllerNode?.appendChild(letterNode);

      setTimeout(() => {
        letterNode.style.left = `${x}%`;
        letterNode.style.top = `${y}%`;
      }, 100);
    });
  }
}

customElements.define("controller-component", ControllerComponent);
