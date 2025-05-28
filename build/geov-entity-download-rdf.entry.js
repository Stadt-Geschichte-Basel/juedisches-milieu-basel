import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { d as downloadOutline } from './index-8d6f5b95.js';

const geovEntityDownloadRdfCss = ":host{display:block}";

const GeovEntityDownloadRdf = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.entityId = undefined;
    this.projectId = undefined;
    this.color = undefined;
    this.expand = undefined;
    this.fill = undefined;
    this.buttonLabel = 'Download RDF';
    this.buttonIcon = undefined;
    this.listFormat = {
      'RDF XML': ['application/rdf+xml', '.rdf'],
      'JSON-LD': ['application/ld+json', '.jsonld'],
      'N-Triples': ['application/n-triples', '.nt'],
      'N-Quads': ['application/n-quads', '.nq'],
      'TRIX': ['application/trix+xml', '.trix'],
      'Thrift': ['application/rdf+thrift', '.thrift'],
      'Turtle': ['text/turtle', '.ttl'],
    };
    this.response = undefined;
  }
  open() {
    this.modal.present();
  }
  dismiss() {
    this.modal.dismiss();
  }
  async fetchRDF(format) {
    const headers = new Headers({
      Accept: format[0], //format[0] = Type
    });
    let args = this.entityId;
    if (this.projectId != undefined) {
      args += '?p=' + this.projectId;
    }
    const url = 'https://www.geovistory.org/resource/';
    const response = await fetch(url + args, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    });
    this.response = await response.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(this.response);
    a.download = this.entityId + format[1]; //format[1] = Extension file
    a.click();
    this.dismiss();
  }
  renderClickableItem() {
    return Object.entries(this.listFormat).map(([a, b]) => (h("ion-item", { button: true, detail: false, onClick: () => this.fetchRDF(b), download: "Download" }, this.buttonIcon ? h("ion-icon", { slot: "start", name: this.buttonIcon }) : h("ion-icon", { slot: "start", icon: downloadOutline }), h("ion-label", null, a))));
  }
  render() {
    return (h(Host, null, h("ion-button", { expand: this.expand, fill: this.fill, color: this.color, onClick: () => this.open() }, this.buttonLabel, " ", this.buttonIcon ? h("ion-icon", { slot: "end", name: this.buttonIcon }) : h("ion-icon", { slot: "end", icon: downloadOutline })), h("ion-modal", { ref: element => (this.modal = element), onWillDismiss: () => this.dismiss(), isOpen: false }, h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { onClick: () => this.dismiss() }, "Cancel")), h("ion-title", null, "Download RDF"))), h("ion-content", { class: "ion-padding" }, h("ion-list", { lines: "none" }, this.renderClickableItem()))), h("slot", null)));
  }
};
GeovEntityDownloadRdf.style = geovEntityDownloadRdfCss;

export { GeovEntityDownloadRdf as geov_entity_download_rdf };

//# sourceMappingURL=geov-entity-download-rdf.entry.js.map