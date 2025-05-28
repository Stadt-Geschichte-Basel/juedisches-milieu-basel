import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';

const geovMapCirclesPopupCss = ":host{display:block;line-height:2;font-size:1rem;padding-right:1rem}ul{list-style:none;padding-left:1rem}ul ul{font-size:.8rem}a{color:#4c51d5;text-decoration:none}";

const GeovMapCirclesPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.items = [];
  }
  render() {
    return (h(Host, null, h("ul", null, this.items.map(i => {
      var _a;
      return (h("li", null, i.url ? (h("a", { target: "_blank", href: i.url }, i.label)) : (i.label), ' ', i.suffix && h("small", null, "(", i.suffix, ")"), ((_a = i === null || i === void 0 ? void 0 : i.items) === null || _a === void 0 ? void 0 : _a.length) > 0 && (h("ul", null, i.items.map(subitem => (h("li", null, subitem.url ? (h("a", { target: "_blank", href: subitem.url }, subitem.label)) : (subitem.label))))))));
    }))));
  }
};
GeovMapCirclesPopup.style = geovMapCirclesPopupCss;

export { GeovMapCirclesPopup as geov_map_circles_popup };

//# sourceMappingURL=geov-map-circles-popup.entry.js.map