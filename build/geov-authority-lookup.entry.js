import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';

const geovAuthorityLookupCss = ":host {\n  display: block;\n}\n\n.containerResponsive {\n  container-type: inline-size;\n}\n\ndiv.masonry-container {\n  column-count: 1;\n}\n\ndiv.masonry-item {\n  width: 100%;\n  box-sizing: border-box;\n  padding-top: 0.1px;\n}\n\n@container (width >= 768px) and (width < 992px) {\n  div.masonry-container {\n    column-count: 2;\n  }\n}\n\n@container (width >= 992px) {\n  div.masonry-container {\n    column-count: 3;\n  }\n}\n";

const GeovAuthorityLookup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = createEvent(this, "selected", 7);
    this.apis = ['gnd', 'idref', 'wikidata', 'geovistory'];
    this.types = ['All', 'Person', 'Place', 'Group'];
    this.nbOccurencesMax = 5;
    this.displaySelectBtn = true;
    this.displayOpenBtn = true;
    this.displayCopyBtn = false;
    this.nbColMax = 2;
    this.initSearch = undefined;
    this.initSearchType = undefined;
    this.keywords = '';
    this.type = '';
  }
  componentWillLoad() {
    if (this.initSearch && this.initSearch.trim() != '') {
      this.keywords = this.initSearch.trim();
    }
    if (this.initSearchType && this.initSearchType.trim() != '') {
      this.type = this.initSearchType.trim();
    }
  }
  render() {
    var _a;
    return (h(Host, null, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("ion-searchbar", { value: this.keywords, debounce: 500, onIonChange: e => {
        this.keywords = e.detail.value;
      } })), h("ion-col", null, h("ion-list", null, h("ion-item", null, h("ion-select", { value: this.type, "aria-label": "type", placeholder: "Select type", onIonChange: e => {
        this.type = e.detail.value;
      } }, this.types && this.types.map(item => h("ion-select-option", { value: item }, item)))))))), h("div", { class: "containerResponsive" }, h("div", { class: "masonry-container", style: this.nbColMax ? { columnCount: this.nbColMax.toString() } : {} }, this.keywords.length
      ? (_a = this.apis) === null || _a === void 0 ? void 0 : _a.map(item => (h("div", { class: "masonry-item" }, h("geov-authority-lookup-explorer", { api: item, keywords: this.keywords, type: this.type, nbOccurencesMax: this.nbOccurencesMax, displayCopyBtn: this.displayCopyBtn, displayOpenBtn: this.displayOpenBtn, displaySelectBtn: this.displaySelectBtn }))))
      : '')), h("slot", null)));
  }
};
GeovAuthorityLookup.style = geovAuthorityLookupCss;

export { GeovAuthorityLookup as geov_authority_lookup };

//# sourceMappingURL=geov-authority-lookup.entry.js.map