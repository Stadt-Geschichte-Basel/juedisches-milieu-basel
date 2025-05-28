import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { r as regexReplace } from './regexReplace-9416bef5.js';

const geovEntityListCss = ":host{display:block}";

const GeovEntityList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.items = undefined;
    this.loading = undefined;
    this.defaultPageSize = 5;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
  }
  render() {
    var _a;
    const iterator = [];
    for (let i = 0; i < this.defaultPageSize; i++) {
      iterator.push('');
    }
    return (h(Host, null, h("ion-list", { lines: "full" }, (_a = this.items) === null || _a === void 0 ? void 0 :
      _a.map(item => (h("ion-item", { href: regexReplace(item.entityUri, this.uriRegex, this.uriReplace), target: "_blank", rel: "noreferrer" }, h("ion-label", null, h("h2", null, item.entityLabel), h("p", null, item.classLabel))))), this.loading &&
      iterator.map(_ => (h("ion-item", null, h("ion-label", null, h("h2", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })))))))));
  }
};
GeovEntityList.style = geovEntityListCss;

export { GeovEntityList as geov_entity_list };

//# sourceMappingURL=geov-entity-list.entry.js.map