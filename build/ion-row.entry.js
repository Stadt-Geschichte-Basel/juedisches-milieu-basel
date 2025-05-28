import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { g as getIonMode } from './ionic-global-9cce5b06.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };

//# sourceMappingURL=ion-row.entry.js.map