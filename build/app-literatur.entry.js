import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';

const appLiteraturCss = ":host{display:block;margin-top:6rem}ion-item{--ion-item-background:var(--ion-card-background)}";

const AppLiteratur = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.items = undefined;
  }
  render() {
    return (h(Host, null, h("ion-card", null, h("ion-card-header", null, h("ion-card-title", null, "Literatur")), h("ion-card-content", null, h("ion-list", null, this.items.map(i => (h("ion-item", { lines: "full" }, h("ion-label", { class: "ion-text-wrap" }, i)))), h("slot", null))))));
  }
};
AppLiteratur.style = appLiteraturCss;

export { AppLiteratur as app_literatur };

//# sourceMappingURL=app-literatur.entry.js.map