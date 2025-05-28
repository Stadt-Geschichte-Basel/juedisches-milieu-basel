import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';

const geovClassRadioGroupCss = ":host{display:block}.hide{display:none !important}";

const GeovClassRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectionChanged = createEvent(this, "selectionChanged", 7);
    this.maxLength = 6;
    this.items = undefined;
    this.preferredItemsList = undefined;
    this.restItemsList = undefined;
    this.loading = undefined;
    this.initValue = undefined;
    this.uriPrefix = 'https://ontome.net/ontology/';
    this.preferredItems = undefined;
    this.showAll = false;
  }
  onItemsChange() {
    // divide items into preferred and rest
    this.preferredItemsList = [];
    this.restItemsList = [];
    this.items.forEach(item => {
      var _a, _b, _c;
      if ((_a = this.preferredItems) === null || _a === void 0 ? void 0 : _a.includes(item.classUri.substring(this.uriPrefix.length))) {
        (_b = this.preferredItemsList) === null || _b === void 0 ? void 0 : _b.push(item);
      }
      else {
        (_c = this.restItemsList) === null || _c === void 0 ? void 0 : _c.push(item);
      }
    });
  }
  componentWillLoad() {
    this.onItemsChange();
  }
  emit(classUri) {
    if (!classUri)
      this.selectionChanged.emit({});
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit)
      this.selectionChanged.emit({ value: toEmit });
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (h(Host, null, h("ion-list", null, h("ion-radio-group", { onIonChange: e => this.emit(e.detail.value), value: (_b = (_a = this.initValue) === null || _a === void 0 ? void 0 : _a.classUri) !== null && _b !== void 0 ? _b : null }, h("ion-item-divider", null, h("ion-label", null, "Class Filter")), h("ion-item", null, h("ion-note", null, "All classes (", (_d = (_c = this.items) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0, ")"), h("ion-radio", { slot: "end", value: null })), (_e = this.preferredItemsList) === null || _e === void 0 ? void 0 :
      _e.map(item => (h("ion-item", null, h("ion-label", null, item.classLabel), h("ion-note", { slot: "end" }, item.instanceCount), h("ion-radio", { slot: "end", value: item.classUri })))))), h("ion-button", { fill: "clear", onClick: () => (this.showAll = !this.showAll) }, this.showAll ? 'Show less' : 'Show all classes'), this.showAll && (h("ion-list", null, h("ion-radio-group", { onIonChange: e => this.emit(e.detail.value), value: (_g = (_f = this.initValue) === null || _f === void 0 ? void 0 : _f.classUri) !== null && _g !== void 0 ? _g : null }, (_h = this.restItemsList) === null || _h === void 0 ? void 0 :
      _h.map((item, index) => (h("ion-item", { class: !this.showAll && index >= this.maxLength ? 'hide' : '' }, h("ion-label", null, item.classLabel), h("ion-note", { slot: "end" }, item.instanceCount), h("ion-radio", { slot: "end", value: item.classUri })))), !((_j = this.restItemsList) === null || _j === void 0 ? void 0 : _j.length) && !this.loading && (h("ion-item", null, h("ion-label", null, "No class found"))), this.loading &&
      ['', '', '', '', ''].map(_ => (h("ion-item", null, h("ion-label", null, h("ion-skeleton-text", { animated: true }))))))))));
  }
  static get watchers() { return {
    "items": ["onItemsChange"]
  }; }
};
GeovClassRadioGroup.style = geovClassRadioGroupCss;

export { GeovClassRadioGroup as geov_class_radio_group };

//# sourceMappingURL=geov-class-radio-group.entry.js.map