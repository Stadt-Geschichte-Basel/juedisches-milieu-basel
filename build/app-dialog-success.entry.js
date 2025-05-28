import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { s as state } from './store-d393c555.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const appDialogSuccessCss = ":host{display:block}";

const AppDialogSuccess = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.nr = undefined;
  }
  async open() {
    await this.successModal.present();
    const t = setTimeout(async () => {
      await this.successModal.dismiss();
      await this.dismiss();
    }, 2500);
    this.successModal.onDidDismiss().then(() => {
      clearTimeout(t);
      this.dismiss();
    });
  }
  render() {
    return (h(Host, null, h("ion-modal", { ref: e => (this.successModal = e) }, h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, "Richtig!"), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => this.successModal.dismiss() }, "Weiter")))), h("ion-content", { class: "ion-padding-top" }, h("div", { style: { 'max-width': '600px', 'margin': '0 auto auto auto' } }, h("slot", null))))));
  }
  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state['t' + this.nr] = 'done';
  }
};
AppDialogSuccess.style = appDialogSuccessCss;

export { AppDialogSuccess as app_dialog_success };

//# sourceMappingURL=app-dialog-success.entry.js.map