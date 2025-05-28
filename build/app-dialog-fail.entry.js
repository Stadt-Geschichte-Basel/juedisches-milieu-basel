import { r as registerInstance, i as h } from './index-c3fe8f75.js';

const appDialogFailCss = ":host{display:block}";

const AppDialogFail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.titleTxt = undefined;
  }
  async open() {
    return this.failModal.present();
  }
  render() {
    return (h("ion-modal", { ref: e => (this.failModal = e) }, h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, this.titleTxt), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => this.failModal.dismiss() }, "Schliessen")))), h("ion-content", { class: "ion-padding" }, h("slot", null))));
  }
};
AppDialogFail.style = appDialogFailCss;

export { AppDialogFail as app_dialog_fail };

//# sourceMappingURL=app-dialog-fail.entry.js.map