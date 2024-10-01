export default `
      <svg> 
        <clipPath id="mask" clipPathUnits="objectBoundingBox">
            <path d="M1,0 l-1,0,0,0.482 c0,0.122,0.027,0.227,0.065,0.251 l0.407,0.259 c0.017,0.011,0.034,0.011,0.05,0 l0.414,-0.26 c0.037,-0.023,0.065,-0.128,0.065,-0.251 l0,-0.481,0,0"/>
        </clipPath>  
      </svg>
      <div part="restore-modal">
        <div part="restore-modal-wrapper">
            <div part="restore-modal-title-wrapper">
                <div part="restore-modal-title-shadow">
                    <h1 part="restore-modal-title">Две вкладки <br /> с игрой?</h1>
                </div>
            </div>
            <p part="restore-modal-text">Похоже, игра открыта в нескольких вкладках браузера.
            Чтобы продолжить играть в <br /> этой вкладке, обновите <br /> страницу.</p>
            <button type="button" part="restore-modal-button">Обновить</button>
        </div>
      </div>
    `;
