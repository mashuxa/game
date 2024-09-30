(()=>{"use strict";var e,t,r={664:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(601),o=r.n(n),s=r(314),i=r.n(s)()(o());i.push([e.id,'.centred,app-component::part(controller-selected-letter),app-component::part(controller-letter),app-component::part(word-cell){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(restore-modal-button),app-component::part(win-screen-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(*){box-sizing:border-box}app-component::part(app-wrapper){height:100vh;overflow:hidden;padding:1rem;margin:auto;user-select:none;box-sizing:border-box;display:flex;flex-direction:column}app-component::part(word-list-wrapper){opacity:0;animation:fadeIn 1s ease forwards;overflow:hidden;flex:1 1 auto}app-component::part(word-list){transform-origin:top;min-height:100%}app-component::part(main-title){text-align:center;font-size:30px}.centred,app-component::part(controller-selected-letter),app-component::part(controller-letter),app-component::part(word-cell){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(restore-modal-button),app-component::part(win-screen-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(word-cell-wrapper){display:flex;flex-wrap:nowrap;justify-content:center}app-component::part(word-cell){border-radius:25%;max-width:72px}.centred,app-component::part(controller-selected-letter),app-component::part(word-cell),app-component::part(controller-letter){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(restore-modal-button),app-component::part(win-screen-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(controller-wrapper){padding:0 min(7vw,45px) min(7vw,45px);flex-shrink:0}app-component::part(controller-letters){position:relative;border-radius:50%;aspect-ratio:1;box-shadow:0 0 0 min(1.875vw,12px) #3e4a68,inset 0 0 0 min(1.875vw,12px) #3e4a68;width:100%;max-width:270px;margin:min(7vw,45px) auto 0}app-component::part(controller-letter){transition:left .3s ease-in-out,top .3s ease-in-out,background-color .1s,color .1s;position:absolute;cursor:pointer;font-size:min(8.75vw,56px);width:min(14vw,90px);border-radius:50%;color:#4d4d4d;background-color:#fff;box-shadow:0 min(.78vw,5px) 0 0 #9fa1a5;transform:translate(-50%, -50%)}app-component::part(controller-letter selected){color:#fff;background-color:#e870a5;box-shadow:0 min(.78vw,5px) 0 0 #b0638d}.centred,app-component::part(word-cell),app-component::part(controller-letter),app-component::part(controller-selected-letter){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(restore-modal-button),app-component::part(win-screen-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(controller-selected-wrapper){display:flex;justify-content:center;align-items:start;padding:1.35rem 0;min-height:7.35rem}app-component::part(controller-selected-letter){border-radius:25%;max-width:42px;color:#4d4d4d;background-color:#fff}.centred,app-component::part(word-cell),app-component::part(controller-letter),app-component::part(controller-selected-letter){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(restore-modal-button),app-component::part(win-screen-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(win-screen-wrapper){display:flex;margin:auto;flex-direction:column;justify-content:space-around;align-items:center;text-align:center;min-height:calc(100vh - 2rem)}app-component::part(win-screen-title){font-size:2.65rem;margin:0;line-height:1.2}app-component::part(win-screen-subtitle){font-size:3.8rem;margin:0;line-height:1.2}.centred,app-component::part(word-cell),app-component::part(controller-letter),app-component::part(controller-selected-letter){display:flex;justify-content:center;align-items:center;flex-shrink:0;text-transform:uppercase;aspect-ratio:1;line-height:100%}.button,app-component::part(win-screen-button),app-component::part(restore-modal-button){cursor:pointer;font-size:2.65rem;line-height:2.4;width:100%;max-width:330px;border-radius:4rem;color:#fff;background-color:#62be64;box-shadow:0 5px 0 0 #518854;font-family:inherit;border:none}app-component::part(restore-modal){position:fixed;top:0;bottom:0;width:100%;background:rgba(0,0,0,.7)}app-component::part(restore-modal-wrapper){--shift-height: 20px;--shift-width: 14px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:calc(100% - 2rem);max-width:530px;background-color:#fff;border-radius:2.8rem;text-align:center;padding:0 1.8rem 1.8rem}app-component::part(restore-modal-title-wrapper){position:relative;max-width:350px;margin:calc(-1*var(--shift-height)) auto}@media(min-width: 461px){app-component::part(restore-modal-title-wrapper)::before,app-component::part(restore-modal-title-wrapper)::after{content:"";position:absolute;top:0;border-bottom:var(--shift-height) solid #994625}app-component::part(restore-modal-title-wrapper)::before{left:calc(-1*var(--shift-width));border-left:var(--shift-width) solid rgba(0,0,0,0)}app-component::part(restore-modal-title-wrapper)::after{right:calc(-1*var(--shift-width));border-right:var(--shift-width) solid rgba(0,0,0,0)}}app-component::part(restore-modal-title-shadow){clip-path:url(#mask);background-color:#c7572b;padding-bottom:6px}app-component::part(restore-modal-title){clip-path:url(#mask);font-size:2.857rem;background-color:#ec6b3a;margin:0;line-height:.9;padding:.8rem .8rem 1.8rem;display:block;border-bottom-left-radius:2rem;border-bottom-right-radius:2rem;width:100%}app-component::part(restore-modal-text){font-size:2.285rem;line-height:1.25;color:#4c4c4c}html{color:#fff;background-color:#2b344b;font-family:"VAG World Bold",sans-serif;font-size:14px}body{padding:0;margin:0}',""]);const a=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);n&&i[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},i=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],p=s[c]||0,d="".concat(c," ").concat(p);s[c]=p+1;var h=r(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var u=o(m,n);n.byIndex=a,t.splice(a,0,{identifier:d,updater:u,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var s=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=r(s[i]);t[a].references--}for(var l=n(e,o),c=0;c<s.length;c++){var p=r(s[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}s=l}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={id:e,exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,function(e){e.incrementLevel="increment-level",e.wordCheck="word-check",e.restoreGame="restore-game"}(e||(e={})),function(e){e.showRestoreModal="showRestoreModal"}(t||(t={}));const s=(e,t)=>e.length-t.length,i=(e,t)=>{const r=(e=>e.split("").reduce(((e,t)=>{const r=e.get(t)||0;return e.set(t,r+1),e}),new Map))(t);return r.forEach(((t,r)=>{const n=e.get(r)||0;return e.set(r,Math.max(n,t)),e})),e},a="640px",l=`\n    <style>\n        * {\n          box-sizing: border-box;\n        }\n\n        @keyframes fadeIn {\n          to {\n            opacity: 1;\n          }\n        }    \n    </style>\n    <main part="app-wrapper" style="max-width: ${a}">\n        <title-component level=""></title-component>\n        <div class="word-list-wrapper" part="word-list-wrapper">\n            <div class="word-list" part="word-list"></div>\n        </div>\n        <controller-component letters=""></controller-component>\n    </main>\n    `,c="app-words-level",p="app-words-words";var d=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}l((n=n.apply(e,t||[])).next())}))};class h extends HTMLElement{constructor(){super(),this.incrementLevel=()=>{this.level+=1,this.setupLevel(),localStorage.setItem(c,String(this.level)),localStorage.removeItem(p)},this.checkWord=e=>{const t=e.detail;this.wordSet.includes(t)&&(this.visibleWords.add(t),this.renderWords(),localStorage.setItem(p,Array.from(this.visibleWords).join())),this.wordSet.length===this.visibleWords.size&&this.shadowRoot&&(this.visibleWords.clear(),this.shadowRoot.innerHTML=`<win-screen-component level="${this.level}"></win-screen-component>`)},this.onBroadcastChannelMessage=e=>{var r;if(e.data.event===t.showRestoreModal){const e=document.createElement("restore-modal-component");null===(r=this.shadowRoot)||void 0===r||r.appendChild(e)}},this.handleBroadcastRestore=()=>{this.restoreGame(),this.broadcastChannel.postMessage({event:t.showRestoreModal})},this.level=1,this.wordSet=[],this.visibleWords=new Set,this.broadcastChannel=new BroadcastChannel("main"),this.attachShadow({mode:"open"}),this.restoreGame()}restoreData(){const e=localStorage.getItem(c),t=localStorage.getItem(p);e&&(this.level=Number(e)),t&&(this.visibleWords=new Set(t.split(",")))}restoreGame(){this.restoreData(),this.setupLevel()}updateWordSet(){return d(this,void 0,void 0,(function*(){const e=this.level%3||3;try{const t=yield fetch(`./levels/${e}.json`);if(!t.ok)throw Error();const{words:r}=yield t.json();this.wordSet=r.sort(s)}catch(e){alert("Упс... Мы скоро все исправим. Попробуйте снова через несколько минут!"),console.error(e)}}))}setupLevel(){return d(this,void 0,void 0,(function*(){if(yield this.updateWordSet(),this.shadowRoot){this.shadowRoot.innerHTML=l;const t=this.shadowRoot.querySelector("title-component"),r=this.shadowRoot.querySelector("controller-component");null==t||t.setAttribute("level",this.level.toString()),null==r||r.setAttribute("letters",(e=this.wordSet,[...e.reduce(i,new Map).entries()].reduce(((e,[t,r])=>[...e,...new Array(r).fill(t)]),[])).join("")),this.renderWords()}var e}))}connectedCallback(){var r,n,o;null===(r=this.shadowRoot)||void 0===r||r.addEventListener(e.incrementLevel,this.incrementLevel),null===(n=this.shadowRoot)||void 0===n||n.addEventListener(e.wordCheck,this.checkWord),null===(o=this.shadowRoot)||void 0===o||o.addEventListener(e.restoreGame,this.handleBroadcastRestore),this.broadcastChannel.postMessage({event:t.showRestoreModal}),this.broadcastChannel.onmessage=this.onBroadcastChannelMessage}renderWords(){const e=this.shadowRoot&&this.shadowRoot.querySelector(".word-list");if(!this.shadowRoot||!e)return;const t=this.wordSet[this.wordSet.length-1].length,r=e.offsetHeight-30;if(e.innerHTML="",this.wordSet.forEach((r=>{const n=document.createElement("word-component"),o=this.visibleWords.has(r)?r:r.replace(/./g," ");n.setAttribute("data",o),n.setAttribute("max-size",t.toString()),e.appendChild(n)})),r){const t=r/e.offsetHeight;e.style.transform=`scale(${t.toFixed(2)})`}}}customElements.define("app-component",h);class m extends HTMLElement{constructor(){super(),this.setPointerDown=()=>{this.pointerdown=!0},this.setPointerUp=()=>{var e;this.pointerdown=!1,this.dispatchWordCheck(),this.selected.forEach((e=>e.part.remove("selected"))),this.selected=[],null===(e=this.selectedLetters)||void 0===e||e.setAttribute("letters","")},this.onPointerIn=({target:e})=>{var t,r;const n=e;this.pointerdown&&(this.selected[this.selected.length-2]===n?null===(t=this.selected.pop())||void 0===t||t.part.remove("selected"):this.selected.includes(n)||(this.selected.push(n),n.part.add("selected")),null===(r=this.selectedLetters)||void 0===r||r.setAttribute("letters",this.selectedWord))},this.onPointerDown=({target:e})=>{var t;const r=e;this.selected.push(r),r.part.add("selected"),null===(t=this.selectedLetters)||void 0===t||t.setAttribute("letters",this.selectedWord)},this.handleTouch=e=>{const t=this.getRootNode(),{clientX:r,clientY:n}=e.touches[0],o=null==t?void 0:t.elementFromPoint(r,n);(null==o?void 0:o.classList.contains("controller-letter"))&&o!==this.touchedLetter&&(this.touchedLetter=o,this.onPointerIn({target:o}))},this.letters=[],this.selected=[],this.pointerdown=!1,this.controllerNode=null,this.selectedLetters=null,this.touchedLetter=null}static get observedAttributes(){return["letters"]}get selectedWord(){return this.selected.map((e=>e.innerText.toLowerCase())).join("")}dispatchWordCheck(){const t=new CustomEvent(e.wordCheck,{detail:this.selectedWord,bubbles:!0});this.dispatchEvent(t)}connectedCallback(){this.innerHTML='\n        <div part="controller-wrapper">\n            <selected-letters-component letters=""></selected-letters-component>\n            <div class="controller-letters" part="controller-letters"></div>   \n        </div>',this.controllerNode=this.querySelector(".controller-letters"),this.selectedLetters=this.querySelector("selected-letters-component"),document.addEventListener("pointerdown",this.setPointerDown),document.addEventListener("mouseup",this.setPointerUp),document.addEventListener("touchend",this.setPointerUp),document.addEventListener("touchmove",this.handleTouch)}attributeChangedCallback(e,t,r){var n;"letters"===e&&t!==r&&(this.letters=(n=r.split("")).reduce(((e,t,r)=>{const o=(s=n.length-1,Math.floor(Math.random()*(s+1-0)+0));var s;return[e[r],e[o]]=[e[o],e[r]],e}),[...n])),this.render()}render(){this.controllerNode&&(this.controllerNode.innerHTML="",this.letters.forEach(((e,t,r)=>{var n;const o=document.createElement("div"),{x:s,y:i}=(e=>{const t=2*e*Math.PI-Math.PI/2;return{x:50*Math.cos(t)+50,y:50*Math.sin(t)+50}})(t/r.length);o.addEventListener("pointerdown",this.onPointerDown),o.addEventListener("mouseenter",this.onPointerIn),o.innerHTML=e,o.setAttribute("part","controller-letter"),o.classList.add("controller-letter"),o.style.left="50%",o.style.top="50%",null===(n=this.controllerNode)||void 0===n||n.appendChild(o),setTimeout((()=>{o.style.left=`${s}%`,o.style.top=`${i}%`}),100)})))}}customElements.define("controller-component",m);class u extends HTMLElement{constructor(){super(),this.button=null}dispatchBroadcastEvent(){const t=new CustomEvent(e.restoreGame,{bubbles:!0});this.dispatchEvent(t)}connectedCallback(){var e;this.innerHTML='\n      <svg> \n        <clipPath id="mask" clipPathUnits="objectBoundingBox">\n            <path d="M1,0 l-1,0,0,0.482 c0,0.122,0.027,0.227,0.065,0.251 l0.407,0.259 c0.017,0.011,0.034,0.011,0.05,0 l0.414,-0.26 c0.037,-0.023,0.065,-0.128,0.065,-0.251 l0,-0.481,0,0"/>\n        </clipPath>  \n      </svg>\n      <div part="restore-modal">\n        <div part="restore-modal-wrapper">\n            <div part="restore-modal-title-wrapper">\n                <div part="restore-modal-title-shadow">\n                    <h1 part="restore-modal-title">Две вкладки <br /> с игрой?</h1>\n                </div>\n            </div>\n            <p part="restore-modal-text">Похоже, игра открыта в нескольких вкладках браузера.\n            Чтобы продолжить играть в <br /> этой вкладке, обновите <br /> страницу.</p>\n            <button type="button" part="restore-modal-button">Обновить</button>\n        </div>\n      </div>\n    ',this.button=this.querySelector("button"),null===(e=this.button)||void 0===e||e.addEventListener("pointerdown",this.dispatchBroadcastEvent)}}customElements.define("restore-modal-component",u);class f extends HTMLElement{constructor(){super()}static get observedAttributes(){return["letters"]}get letters(){return(this.getAttribute("letters")||"").split("")}attributeChangedCallback(){this.render()}render(){const e=document.createElement("div");e.setAttribute("part","controller-selected-wrapper"),this.letters.forEach((t=>{const r=document.createElement("div"),n=`min(100vw, 100vh, ${a})/${this.letters.length} - 6px`;r.setAttribute("part","controller-selected-letter"),r.style.width=`calc(${n})`,r.style.margin="3px",r.innerHTML=t,e.appendChild(r)})),this.innerHTML="",this.appendChild(e)}}customElements.define("selected-letters-component",f);class v extends HTMLElement{constructor(){super()}static get observedAttributes(){return["level"]}get level(){return this.getAttribute("level")||""}connectedCallback(){this.render()}attributeChangedCallback(e,t,r){"level"===e&&t!==r&&this.render()}render(){this.innerHTML=`<h1 part="main-title">Уровень ${this.level}</h1>`}}customElements.define("title-component",v);class b extends HTMLElement{constructor(){super()}handleClick(){const t=new CustomEvent(e.incrementLevel,{bubbles:!0});this.dispatchEvent(t)}connectedCallback(){this.render(),this.addEventListener("pointerdown",this.handleClick)}render(){this.innerHTML=` \n      <main part="win-screen-wrapper" style="max-width: ${a}">\n          <div>\n            <h1 part="win-screen-title">Уровень ${this.getAttribute("level")} пройден</h1>\n            <p part="win-screen-subtitle">Изумительно!</p>\n          </div>\n          <button part="win-screen-button">Уровень ${Number(this.getAttribute("level"))+1}</button>\n      </main>\n    `}}customElements.define("win-screen-component",b);class w extends HTMLElement{constructor(){super()}static get observedAttributes(){return["data","max-size"]}get letters(){var e;return(null===(e=this.getAttribute("data"))||void 0===e?void 0:e.split(""))||[]}get maxSize(){return Number(this.getAttribute("max-size"))}attributeChangedCallback(){this.render()}render(){const e=document.createElement("div");e.setAttribute("part","word-cell-wrapper"),e.classList.add("letter-list"),this.letters.forEach((t=>{const r=document.createElement("div"),n=`min(100vw, ${a})/${this.maxSize} - 6px`;r.classList.add("cell"),r.setAttribute("part","word-cell"),r.style.backgroundColor=t.trim()?"#63BE64":"#FFF",r.style.width=`calc(${n})`,r.style.margin="3px",r.style.fontSize=`min(calc((${n})*0.568), 42px)`,r.innerHTML=t.trim(),e.appendChild(r)})),this.innerHTML="",this.append(e)}}customElements.define("word-component",w);var g=o(72),x=o.n(g),y=o(825),L=o.n(y),E=o(659),k=o.n(E),M=o(56),C=o.n(M),S=o(540),A=o.n(S),T=o(113),H=o.n(T),z=o(664),R={};R.styleTagTransform=H(),R.setAttributes=C(),R.insert=k().bind(null,"head"),R.domAPI=L(),R.insertStyleElement=A(),x()(z.A,R),z.A&&z.A.locals&&z.A.locals})();