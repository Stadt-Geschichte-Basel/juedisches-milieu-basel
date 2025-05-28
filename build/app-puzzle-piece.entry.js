import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { s as state } from './store-d393c555.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const appPuzzlePieceCss = ".puzzle-piece{position:relative;display:inline;color:var(--ion-color-primary)}.puzzle-piece svg{width:180px;height:180px;margin:-30px}.puzzle-piece path{stroke:var(--ion-color-primary);stroke-width:5px;fill:rgba(255, 255, 255, 0);cursor:pointer;z-index:100}.puzzle-piece path:hover{fill:var(--ion-color-light-shade)}.puzzle-piece.done path{fill:var(--ion-color-success)}.puzzle-piece div{position:absolute;width:100%;height:100%;bottom:40px;pointer-events:none}";

const AppPuzzlePiece = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pieceId = undefined;
    this.label = undefined;
  }
  render() {
    return (h(Fragment, null, h("div", { class: `puzzle-piece ${state[this.pieceId] ? 'done' : ''}` }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, h("path", { onClick: () => routerProvider.ionRouterElement.push('/puzzle/' + this.pieceId, 'forward'), "stroke-linecap": "round", "stroke-linejoin": "round", d: "M413.66 246.1H386a2 2 0 01-2-2v-77.24A38.86 38.86 0 00345.14 128H267.9a2 2 0 01-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 00-50.4 49.51V126a2 2 0 01-2 2H87.62A39.74 39.74 0 0048 167.62V238a2 2 0 002 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 00-2 2v70.38A39.74 39.74 0 0087.62 464H158a2 2 0 002-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 002 2h71.14A38.86 38.86 0 00384 425.14v-78a2 2 0 012-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64z" })), h("div", null, this.label))));
  }
};
AppPuzzlePiece.style = appPuzzlePieceCss;

export { AppPuzzlePiece as app_puzzle_piece };

//# sourceMappingURL=app-puzzle-piece.entry.js.map