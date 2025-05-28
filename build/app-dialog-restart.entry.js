import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { a as animationBuilderFadePages } from './page-animation-92d0ff95.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { r as reset } from './store-d393c555.js';
import './index-38453636.js';
import './animation-f8742375.js';
import './index-150d1a25.js';
import './helpers-2255292b.js';
import './ios.transition-01adfc50.js';
import './index-87867bd6.js';
import './md.transition-156ee485.js';
import './cubic-bezier-67bf1f69.js';
import './index-89e0f6ee.js';
import './ionic-global-9cce5b06.js';
import './config-a7320371.js';
import './index-6dc853c2.js';
import './hardware-back-button-90902d55.js';
import './overlays-b26ddc71.js';
import './framework-delegate-865e6fcf.js';
import './index-bf616dc7.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const appDialogRestartCss = ":host{display:block}";

const AppDialogRestart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async open() {
    await this.confirmRestartModal.present();
  }
  render() {
    return (h(Host, null, h("ion-modal", { ref: e => (this.confirmRestartModal = e) }, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { onClick: () => this.confirmRestartModal.dismiss() }, "Nein")), h("ion-title", null, "Von vorne beginnen?"), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => this.restart() }, "Ja")))), h("ion-content", { class: "ion-padding" }, "Der Spielstand wird gel\u00F6scht und das Puzzle beginnt erneut."))));
  }
  async restart() {
    await this.confirmRestartModal.dismiss();
    reset();
    await routerProvider.ionRouterElement.push('/intro', 'forward', animationBuilderFadePages);
  }
};
AppDialogRestart.style = appDialogRestartCss;

export { AppDialogRestart as app_dialog_restart };

//# sourceMappingURL=app-dialog-restart.entry.js.map