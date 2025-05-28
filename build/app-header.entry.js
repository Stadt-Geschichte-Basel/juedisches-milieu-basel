import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';

const appHeaderCss = ":host{display:block}";

const AppHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerTitle = undefined;
  }
  render() {
    return (h(Fragment, null, h("app-menu", null), h("ion-header", { translucent: false }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { text: "Zur\u00FCck", defaultHref: window.location.pathname === '/puzzle' ? undefined : '/puzzle' })), h("ion-title", { class: 'ion-hide-md-up' }, this.headerTitle), h("ion-buttons", { slot: "end" }, h("ion-menu-button", null))))));
  }
};
AppHeader.style = appHeaderCss;

export { AppHeader as app_header };

//# sourceMappingURL=app-header.entry.js.map