import { maxAppWidth } from "../../styles/theme";

export default `
    <style>
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }    
    </style>
    <main part="app-wrapper" style="max-width: ${maxAppWidth}">
        <title-component level=""></title-component>
        <div class="word-list" part="word-list"></div>
        <controller-component letters=""></controller-component>
    </main>
    `;
