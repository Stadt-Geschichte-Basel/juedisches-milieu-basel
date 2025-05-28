import { r as registerInstance, i as h, m as Host, n as getElement } from './index-c3fe8f75.js';

const geovTocCss = ":host{display:block}.toc{display:none}@media screen and (min-width: 1200px){.toc{display:inline;position:fixed;max-width:300px;right:2rem}}";

const GeovToc = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.indentPx = 16;
    this.toc = undefined;
  }
  componentDidLoad() {
    console.log('r');
    this.toc = this.createToc();
  }
  render() {
    return (h(Host, null, this.toc, h("slot", null)));
  }
  createToc() {
    const tocItems = [];
    if (this.el) {
      const getHref = (e) => {
        const id = e === null || e === void 0 ? void 0 : e.getAttribute('id');
        return id ? `#${id}` : undefined;
      };
      const getText = (e) => {
        return e.textContent;
      };
      const scanElement = (element) => {
        var _a;
        (_a = element.childNodes) === null || _a === void 0 ? void 0 : _a.forEach(e => {
          let headingLevel;
          switch (e.nodeName) {
            case 'H1':
              headingLevel = 1;
              break;
            case 'H2':
              headingLevel = 2;
              break;
            case 'H3':
              headingLevel = 3;
              break;
            case 'H4':
              headingLevel = 4;
              break;
            case 'H5':
              headingLevel = 5;
              break;
            case 'H6':
              headingLevel = 6;
              break;
          }
          if (headingLevel !== undefined) {
            const level = headingLevel - 1;
            const text = getText(e);
            const href = getHref(e);
            const item = this.createTocItem(level, text, href);
            return tocItems.push(item);
          }
          if (e.nodeName === '#text')
            return;
          return scanElement(e);
        });
      };
      scanElement(this.el);
    }
    return h("ion-list", { class: "toc" }, tocItems);
  }
  createTocItem(level, text, href) {
    const inner = h("div", { style: { paddingLeft: `${level * 16}px` } }, text);
    return href ? (h("ion-item", { href: href, detail: false }, inner, ' ')) : (h("ion-item", null, inner));
  }
  get el() { return getElement(this); }
};
GeovToc.style = geovTocCss;

export { GeovToc as geov_toc };

//# sourceMappingURL=geov-toc.entry.js.map