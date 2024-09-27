import { maxAppWidth } from "../../styles/theme";

const appTemplate = `
    <style>
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }    
    </style>
    <main part="app-wrapper" style="max-width: ${maxAppWidth}">
        <title-component level="1"></title-component>
        <div class="word-list" part="word-list"></div>
        <controller-component letters=""></controller-component>
        <button-component></button-component>
    </main>
    `;

export default appTemplate;
