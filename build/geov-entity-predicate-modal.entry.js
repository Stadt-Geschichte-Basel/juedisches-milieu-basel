import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';

const geovEntityPredicateModalCss = ":host{display:block}";

const GeovEntityPredicateModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalTitle = undefined;
    this.fetchBeforeRender = true;
    this.entityUri = undefined;
    this.sparqlEndpoint = undefined;
    this.totalCount = undefined;
    this.pageSize = 3;
    this.language = undefined;
    this.predicateUri = undefined;
    this.predicateLabel = undefined;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
    this.modalIsOpen = false;
  }
  render() {
    return (h(Host, null, h("span", { onClick: () => this.open() }, h("slot", null)), h("ion-modal", { ref: e => (this.modal = e) }, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { onClick: () => this.close() }, "Close")), h("ion-title", null, this.modalTitle))), h("ion-content", { ref: e => (this.content = e), class: "ion-padding" }, this.modalIsOpen && (h("geov-entity-props-by-predicate", { sparqlEndpoint: this.sparqlEndpoint, entityUri: this.entityUri, totalCount: this.totalCount, language: this.language, predicateUri: this.predicateUri, predicateLabel: this.predicateLabel, fetchBeforeRender: this.fetchBeforeRender }))))));
  }
  open() {
    this.modal.present();
    this.modalIsOpen = true;
  }
  close() {
    this.modal.dismiss();
    this.modalIsOpen = false;
  }
};
GeovEntityPredicateModal.style = geovEntityPredicateModalCss;

export { GeovEntityPredicateModal as geov_entity_predicate_modal };

//# sourceMappingURL=geov-entity-predicate-modal.entry.js.map