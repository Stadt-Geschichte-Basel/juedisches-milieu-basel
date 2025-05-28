import { r as registerInstance, i as h, F as Fragment, f as getAssetPath } from './index-c3fe8f75.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { s as state } from './store-d393c555.js';
import { t as titles } from './titles-76c7ba57.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const pagePuzzleCss = ":host{display:block}.container{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;--bg-locked:var(--app-puzzle-piece-bg-locked);--bg-unlocked:var(--app-puzzle-piece-bg-unlocked);--bg-unlocked-hover:var(--app-puzzle-piece-bg-unlocked-hover);--bg-unlocked-active:var(--app-puzzle-piece-bg-unlocked-active);--bg-highlighed:var(--app-puzzle-piece-bg-highlighed);--text-locked:var(--app-puzzle-piece-text-locked);--text-unlocked:var(--app-puzzle-piece-text-unlocked);--text-highlighed:var(--app-puzzle-piece-text-highlighed);--text-hover:var(--app-puzzle-piece-text-hover)}.h-container{text-align:center;height:70px}.svg-container{flex-grow:1;position:relative}.svg-container>div{position:absolute;top:0;bottom:0;left:0;right:0;margin:.5rem;display:flex;justify-content:center;align-items:center}.svg-container>div>svg{position:absolute;max-width:100%;max-height:100%}.puzzle-row{display:flex;flex-direction:row;justify-content:center}.puzzle-piece{opacity:1}.puzzle-piece path.overlay{z-index:1;fill:rgba(255, 255, 255, 0)}.puzzle-piece.unlocked path.overlay,.puzzle-piece.done path.overlay{cursor:pointer}.puzzle-piece.unlocked path.overlay:hover{fill:var(--bg-unlocked-hover)}.puzzle-piece.unlocked path.overlay:active{fill:var(--bg-unlocked-active)}.puzzle-piece.done path.overlay:hover{fill:rgba(0, 0, 0, 0.1)}.puzzle-piece.done path.overlay:active{fill:rgba(0, 0, 0, 0.2)}.puzzle-piece path.cover{transition:all 2s;stroke:var(--ion-background-color)}.puzzle-piece.locked path.cover{transition:all 200ms;fill:var(--bg-locked)}.puzzle-piece.unlocked path.cover{transition:all 2s;fill:var(--bg-unlocked)}.puzzle-piece.done path.cover{transition:all 2s;fill:rgba(0, 0, 0, 0);stroke:rgba(255, 255, 255, 0.225)}.puzzle-piece.highlighted path.cover{transition:all 200ms;fill:var(--bg-highlighed)}.puzzle-piece text{transition:fill s2;font-weight:600;text-anchor:middle;pointer-events:none}.puzzle-piece text.nr{font-size:170px}.puzzle-piece text.label{font-size:48px}.puzzle-piece.unlocked text{fill:var(--text-unlocked)}.puzzle-piece.locked text{fill:var(--text-locked)}.puzzle-piece.highlighted text{fill:var(--text-highlighed)}.puzzle-piece.done text{fill:rgba(0, 0, 0, 0)}.puzzle-piece.done:hover text,.puzzle-piece.done:active text{fill:var(--text-hover)}.title{fill:var(--ion-color-step-500);font-size:68px}.game-finished{min-width:18rem;text-align:center;margin-bottom:2rem;transition:height 2s}.game-finished.hidden{height:0px;overflow:hidden}.game-finished.visible{height:11.875rem;overflow:hidden}.game-finished>p{font-size:1.5rem}";

const PagePuzzle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.row1 = [
      {
        nr: 3,
        label: titles[3],
        txt1: { x: 12.325, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 12.325, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M0.261,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        nr: 8,
        label: titles[8],
        txt1: { x: 512.328, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 512.328, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        nr: 12,
        label: titles[12],
        txt1: { x: 1012.33, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 1012.33, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        nr: 6,
        label: titles[6],
        txt1: { x: 1512.33, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 1512.33, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
    ];
    this.row2 = [
      {
        nr: 9,
        label: titles[9],
        txt1: { x: 262.327, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 262.327, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
      {
        nr: 1,
        label: titles[1],
        txt1: { x: 762.33, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 762.33, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
      {
        nr: 10,
        label: titles[10],
        txt1: { x: 1262.33, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 1262.33, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
    ];
    this.row3 = [
      {
        nr: 11,
        label: titles[11],
        txt1: { x: 12.325, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 12.325, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M0.261,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        nr: 7,
        label: titles[7],
        txt1: { x: 512.328, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 512.328, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        nr: 4,
        label: titles[4],
        txt1: { x: 1012.33, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 1012.33, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,1299.43l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        nr: 5,
        label: titles[5],
        txt1: { x: 1512.33, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 1512.33, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
    ];
    this.row4 = [
      {
        nr: 2,
        label: titles[2],
        txt1: { x: 762.33, y: 1425.62, width: 475.875, height: 162.484 },
        txt2: { x: 762.33, y: 1588.11, width: 475.875, height: 162.484 },
        path: {
          d: 'M750.266,1732.45l-0,-288.677l250.001,-144.339l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338Z',
        },
      },
    ];
    this.elements = [...this.row1, ...this.row2, ...this.row3, ...this.row4];
  }
  componentDidLoad() {
    const svg = this.p.querySelector('svg');
    svg.setAttribute('width', '380');
    svg.setAttribute('y', '650px');
    svg.setAttribute('x', '1310px');
    this.g.appendChild(this.p.querySelector('svg'));
  }
  render() {
    const parts = [state.t1, state.t2, state.t3, state.t4, state.t5, state.t6, state.t7, state.t8, state.t9, state.t10, state.t11, state.t12];
    const resolved = parts.filter(t => t === 'done').length;
    const total = parts.length;
    return (h(Fragment, null, h("app-header", { headerTitle: "" }), h("ion-content", { class: "ion-padding", id: "main-menu" }, h("app-progress-meter", { value: resolved, maxVal: total, style: { display: 'none' }, ref: e => (this.p = e) }), h("div", { class: "container" }, h("div", { class: `game-finished ${state.showBravo ? 'visible' : 'hidden'}` }, h("p", null, "Bravo ", h("br", null), "Du hast es geschafft!"), h("div", null, h("ion-button", { color: "primary", onClick: () => this.openGratification() }, "Belohnung abholen"), ' ', h("ion-button", { fill: "clear", onClick: () => this.confirmRestartModal.open() }, "Neustart"))), h("div", { class: "svg-container hidden" }, h("div", null, h("svg", { viewBox: "0 0 2001 1877", version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: { fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterLimit: '2' } }, h("defs", null, h("clipPath", { id: "shape" }, h("path", { stroke: "1p solid blue", fill: "none", d: "M250.263,866.417c-0,-0 -0,-288.677 -0,-288.677l-250.002,-144.339l0,-288.677l250.002,-144.338l250.001,144.338l250.002,-144.338l250.001,144.338c0,0 250.002,-144.338 250.002,-144.338l250.001,144.338l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339c-0,-0 -0,288.677 -0,288.677l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l-250.001,144.339c-0,-0 -0,288.677 -0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l-250.002,-144.339c0,0 -250.001,144.339 -250.001,144.339l-250.002,-144.339l0,-288.677l250.002,-144.338Z" }))), h("image", { height: "100%", "clip-path": "url(#shape)", xlinkHref: getAssetPath('../../assets/puzzle.jpg') }), h("g", null, this.elements.map(e => (h("g", { class: `puzzle-piece ${state === null || state === void 0 ? void 0 : state['t' + e.nr]}` }, h("path", { class: "cover", d: e.path.d }), h("path", { class: "overlay", d: e.path.d, onClick: () => this.navigate(e) }), h("text", { class: "label", x: e.txt2.x + e.txt2.width / 2, y: e.txt2.y + 14, "dominant-baseline": "middle", "text-anchor": "middle" }, e.label)))), h("g", { ref: e => (this.g = e) }), h("text", { class: "title", x: "498px", y: "1460px", "dominant-baseline": "middle", "text-anchor": "middle" }, "Das"), h("text", { class: "title", x: "498px", y: "1560px", "dominant-baseline": "middle", "text-anchor": "middle" }, "j\u00FCdische Basel"), h("text", { class: "title", x: "498px", y: "1660px", "dominant-baseline": "middle", "text-anchor": "middle" }, "1850 bis 1914")))))), h("app-dialog-restart", { ref: e => (this.confirmRestartModal = e) })), h("app-footer", null)));
  }
  async openGratification() {
    routerProvider.ionRouterElement.push('/belohnung');
  }
  navigate(e) {
    if (state['t' + e.nr] !== 'locked')
      routerProvider.ionRouterElement.push('/puzzle/teil-' + e.nr, 'forward');
  }
};
PagePuzzle.style = pagePuzzleCss;

export { PagePuzzle as page_puzzle };

//# sourceMappingURL=page-puzzle.entry.js.map