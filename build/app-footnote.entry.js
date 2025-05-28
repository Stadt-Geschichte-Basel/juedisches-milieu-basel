import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import { h as helpCircleOutline } from './index-8d6f5b95.js';

const appFootnoteCss = ":host{display:inline;padding-left:0.1rem}ion-icon{vertical-align:top;cursor:pointer}";

const AppFootnote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = undefined;
  }
  render() {
    return (h(Fragment, null, h("ion-icon", { onClick: e => this.el.present(e), icon: helpCircleOutline }), h("ion-popover", { ref: el => (this.el = el), trigger: "top-center", side: "top", alignment: "center" }, h("ion-content", { class: "ion-padding" }, this.text))));
  }
};
AppFootnote.style = appFootnoteCss;

export { AppFootnote as app_footnote };

//# sourceMappingURL=app-footnote.entry.js.map