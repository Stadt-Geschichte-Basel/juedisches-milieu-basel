import { r as registerInstance, h as Build, i as h, F as Fragment } from './index-c3fe8f75.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { s as state } from './store-d393c555.js';
import { t as titles } from './titles-76c7ba57.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const pageTeil1Css = ":host{display:block}";

const nr = 1;
const PageTeil1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    let theme = 'purple';
    if (Build.isBrowser && typeof window['__theme'] === 'string') {
      theme = window['__theme'];
    }
    const colorUnlocked = theme === 'light' ? 'violettes' : 'weisses';
    return (h(Fragment, null, h("app-header", { headerTitle: titles[nr] }), h("ion-content", { class: "ion-padding", id: "main-menu" }, h("app-content", null, h("h1", { class: "ion-hide-md-down" }, titles[nr]), h("p", { class: 'lead' }, "Dieses digitale Puzzle gibt in zw\u00F6lf Teilen einen Einblick in die Geschichte des j\u00FCdischen Basels von 1850 bis 1914."), h("p", null, "So funktioniert es:"), h("p", null, h("ul", null, h("li", null, "Klicke auf ein ", colorUnlocked, " (=freigeschaltetes) Puzzleteil."), h("li", null, "Schau dir die Inhalte an und l\u00F6se das R\u00E4tsel."), h("li", null, "Bei richtiger Antwort dreht sich das Puzzleteil um und ein n\u00E4chstes schaltet sich frei."), h("li", null, "Am Ende winkt als Belohnung ein ", h("br", null), " ", h("strong", null, "Gratiseintritt in ein Museum"), "! ", h("br", null), " Lass dich \u00FCberraschen\u2026"))), h("p", null, "Puzzeln st\u00E4rkt unser Wohlbefinden. Es regt beide Gehirnh\u00E4lften an und wirkt sich positiv auf Konzentration und Kurzzeitged\u00E4chtnis aus. Also: Leg los. Tauche in das Puzzle ein und eigne dir Wissen zur Geschichte des j\u00FCdischen Basels an."), h("p", null, h("ion-button", { color: "primary", onClick: _ => this.dismiss() }, "OK, los geht's!")))), h("app-footer", null)));
  }
  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state.t1 = 'done';
  }
};
PageTeil1.style = pageTeil1Css;

export { PageTeil1 as page_teil_1 };

//# sourceMappingURL=page-teil-1.entry.js.map