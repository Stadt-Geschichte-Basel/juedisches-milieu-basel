import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { m as menuController } from './index-6dc853c2.js';
import { g as getIonMode } from './ionic-global-9cce5b06.js';
import { u as updateVisibility } from './menu-toggle-util-8eeed5ad.js';
import './hardware-back-button-90902d55.js';
import './helpers-2255292b.js';
import './animation-f8742375.js';
import './index-150d1a25.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

export { MenuToggle as ion_menu_toggle };

//# sourceMappingURL=ion-menu-toggle.entry.js.map