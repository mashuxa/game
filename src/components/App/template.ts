import { maxAppWidth } from "../../styles/theme";

const template = `
    <main part="app-wrapper" style="max-width: ${maxAppWidth}">
        <title-component level="1"></title-component>
        <div class="word-list"></div>
        <controller-component letters=""></controller-component>
        <button-component></button-component>
    </main>
    `;

export default template;
