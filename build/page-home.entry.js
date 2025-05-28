import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';

const pageHomeCss = "";

const PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = undefined;
    this.mode = localStorage.getItem('mode') || 'auto';
  }
  setMode(mode) {
    if (mode == this.mode) {
      return;
    }
    this.mode = mode;
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode);
        break;
      default:
        localStorage.removeItem('mode');
        break;
    }
    location.reload();
  }
  render() {
    return (h(Fragment, null, h("ion-header", null, h("ion-toolbar", { color: "primary" }, h("ion-title", null, "Home"))), h("ion-content", { class: "ion-padding" }, h("p", null, "Welcome to Stencil App Starter."), h("ion-list", null, h("ion-radio-group", { value: this.mode, onIonChange: e => this.setMode(e.detail.value) }, h("ion-list-header", null, h("ion-label", null, "Theme Mode")), h("ion-note", { class: "ion-padding-start" }, "(Changing theme will reload the whole app.)"), h("ion-item", null, h("ion-radio", { value: "auto" }, "Auto Detect")), h("ion-item", null, h("ion-radio", { value: "md" }, "Material Design")), h("ion-item", null, h("ion-radio", { value: "ios" }, "iOS")))), h("p", null, "Let's try navigating with ionic router!"), h("ion-list", null, h("ion-item", { href: "/tab/notice" }, h("ion-label", null, "Notice Page (/tab/notice)")), h("ion-item", { href: "/profile/ionic" }, h("ion-label", null, "Profile Page (/profile/ionic)"))))));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };

//# sourceMappingURL=page-home.entry.js.map