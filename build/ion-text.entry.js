import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { c as createColorClasses } from './theme-7dce6eff.js';
import { g as getIonMode } from './ionic-global-9cce5b06.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };

//# sourceMappingURL=ion-text.entry.js.map