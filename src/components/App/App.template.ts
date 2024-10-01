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
    <svg part="controller-line" width="100%" height="100%">
        <path id="controller-dynamic-line" d="" stroke="#658dc4" stroke-width="20" fill="none"/>
    </svg>
    <main part="app-wrapper" style="max-width: ${MAX_APP_WIDTH}">
        <h1 part="main-title">Уровень ${level}</h1>
        <title-component level=""></title-component>
        <div class="word-list" part="word-list"></div>
        <controller-component letters=""></controller-component>
    </main>
    `;
};
