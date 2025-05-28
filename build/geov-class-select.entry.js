import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';

const geovClassSelectCss = ":host{display:block}.hide{display:none !important}";

const GeovClassSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectionChanged = createEvent(this, "selectionChanged", 7);
    this.selection = {};
    // the max length of the list list when this.showAll = false
    this.maxLength = 6;
    this.checkedOnInit = true;
    this.items = undefined;
    this.loading = undefined;
    this.showAll = false;
    this.allToggler = undefined;
    this.allToggler = !this.checkedOnInit;
  }
  /**
   * Called once just after the component is fully loaded and the first render() occurs.
   */
  componentDidLoad() {
    this.emitSelection();
  }
  onItemChange(uri, selected) {
    const changed = this.selection[uri] !== selected;
    this.selection[uri] = selected;
    if (changed)
      this.emitSelection();
  }
  emitSelection() {
    const selectedClassUris = Object.keys(this.selection).filter(k => this.selection[k] === true);
    this.selectionChanged.emit({ selectedClassUris });
  }
  isChecked(uri) {
    if (this.selection[uri] !== undefined)
      return this.selection[uri];
    this.selection[uri] = this.checkedOnInit;
    return this.selection[uri];
  }
  toggleAll() {
    var _a;
    (_a = this.items) === null || _a === void 0 ? void 0 : _a.forEach(i => {
      this.selection[i.classUri] = this.allToggler;
    });
    this.allToggler = !this.allToggler;
    this.emitSelection();
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, null, h("ion-list", { lines: "full" }, h("ion-list-header", null, h("ion-label", null, "Classes (", (_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, ")"), ((_c = this.items) === null || _c === void 0 ? void 0 : _c.length) > this.maxLength &&
      (this.showAll === false ? (h("ion-button", { onClick: () => (this.showAll = true) }, "Show all")) : (h("ion-button", { onClick: () => (this.showAll = false) }, "Show less")))), h("ion-item", null, h("ion-note", null, "All Classes"), h("ion-checkbox", { slot: "end", checked: !this.allToggler, onIonChange: _ => this.toggleAll() })), (_d = this.items) === null || _d === void 0 ? void 0 :
      _d.map((item, index) => (h("ion-item", { class: !this.showAll && index >= this.maxLength ? 'hide' : '' }, h("ion-label", null, item.classLabel), h("ion-badge", { slot: "end" }, item.instanceCount), h("ion-checkbox", { slot: "end", checked: this.isChecked(item.classUri), onIonChange: event => this.onItemChange(item.classUri, event.detail.checked) })))), !((_e = this.items) === null || _e === void 0 ? void 0 : _e.length) && !this.loading && (h("ion-item", null, h("ion-label", null, "No class found"))), this.loading &&
      ['', '', '', '', ''].map(_ => (h("ion-item", null, h("ion-label", null, h("ion-skeleton-text", { animated: true }))))))));
  }
};
GeovClassSelect.style = geovClassSelectCss;

export { GeovClassSelect as geov_class_select };

//# sourceMappingURL=geov-class-select.entry.js.map