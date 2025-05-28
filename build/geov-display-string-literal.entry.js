import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import { e as eye } from './index-8d6f5b95.js';

const geovDisplayStringLiteralCss = ":host{display:block}.wrapper{display:flex}.literal-container{overflow:clip;width:100%}.literal-container ion-button{display:none;margin-left:auto}.label-container{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.color-light{color:var(--ion-color-step-600, black)}.label{width:100%}.open-modal-btn{min-height:0;padding:0;margin:0 0 0 0.25rem;--padding-inline-start:0;--padding-inline-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0}";

const GeovDisplayStringLiteralLiteral = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleResize = () => {
      this.resizePage();
    };
    this.modalTitle = undefined;
    this.label = undefined;
    this.language = undefined;
  }
  componentDidLoad() {
    this.resizePage();
    window.addEventListener('resize', this.handleResize);
  }
  resizePage() {
    // Display Expand button if need. The page must be loaded in order to have the measurements
    if (this.labelContainer && this.itemButton) {
      // If size of text > size of container
      if (this.labelContainer.scrollWidth > this.labelContainer.clientWidth) {
        this.itemButton.style.display = 'block';
      }
      else {
        this.itemButton.style.display = 'none';
      }
    }
  }
  open() {
    this.modal.present();
  }
  dismiss() {
    this.modal.dismiss();
  }
  render() {
    return (h(Fragment, null, h("div", { class: "wrapper" }, h("div", { class: "literal-container" }, h("div", { ref: element => (this.labelContainer = element) }, this.label, " ", this.language && h("span", { class: "color-light" }, "@", this.language))), h("ion-button", { class: "open-modal-btn", size: "small", fill: "clear", onClick: () => this.open(), ref: el => (this.itemButton = el) }, h("ion-icon", { icon: eye }))), h("ion-modal", { ref: element => (this.modal = element), onWillDismiss: () => this.dismiss(), isOpen: false }, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => this.dismiss() }, "Close")), h("ion-title", null, this.modalTitle))), h("ion-content", { class: "ion-padding" }, this.label))));
  }
};
GeovDisplayStringLiteralLiteral.style = geovDisplayStringLiteralCss;

export { GeovDisplayStringLiteralLiteral as geov_display_string_literal };

//# sourceMappingURL=geov-display-string-literal.entry.js.map