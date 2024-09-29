import { MAX_APP_WIDTH } from "../../styles/theme";

export default (level: number): string => {
  return `
    <style>
        * {
          box-sizing: border-box;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }    
    </style>
    <main part="app-wrapper" style="max-width: ${MAX_APP_WIDTH}">
        <h1 part="main-title">Уровень ${level}</h1>
        <title-component level=""></title-component>
        <div class="word-list" part="word-list"></div>
        <controller-component letters=""></controller-component>
    </main>
    `;
};
