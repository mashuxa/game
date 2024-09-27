export const CONTROLLER_WIDTH = 300;

export default `
        <div part="controller-wrapper">
            <selected-letters-component letters=""></selected-letters-component>
            <div style="width: ${CONTROLLER_WIDTH}px" class="controller-letters" part="controller-letters"></div>   
        </div>`;
