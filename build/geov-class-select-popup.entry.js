import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';

const geovClassSelectPopupCss = ":host{display:block}";

const GeovClassSelectPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectionChanged = createEvent(this, "selectionChanged", 7);
    this.items = undefined;
    this.initValue = undefined;
  }
  emit(classUri) {
    if (!classUri)
      this.selectionChanged.emit({});
    const toEmit = this.items.find(item => item.classUri === classUri);
    if (toEmit)
      this.selectionChanged.emit({ value: toEmit });
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, null, h("ion-list", null, h("ion-item", null, h("ion-note", null, "Class Filter:"), h("ion-select", { placeholder: "Select class", onIonChange: e => this.emit(e.detail.value), value: (_b = (_a = this.initValue) === null || _a === void 0 ? void 0 : _a.classUri) !== null && _b !== void 0 ? _b : null, ref: e => (e.interfaceOptions = {
        header: 'Class Filter',
      }) }, h("ion-select-option", { value: null }, h("ion-label", { slot: "start" }, "All classes (", (_d = (_c = this.items) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0, ")")), (_e = this.items) === null || _e === void 0 ? void 0 :
      _e.map(item => (h("ion-select-option", { value: item.classUri }, h("ion-label", { slot: "start" }, item.classLabel), ' '))))))));
  }
};
GeovClassSelectPopup.style = geovClassSelectPopupCss;

export { GeovClassSelectPopup as geov_class_select_popup };

//# sourceMappingURL=geov-class-select-popup.entry.js.map