import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';

const appContentCss = ".app-content{display:block;max-width:1000px;margin:0 auto}";

const AppContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "app-content" }, h("slot", null))));
  }
};
AppContent.style = appContentCss;

export { AppContent as app_content };

//# sourceMappingURL=app-content.entry.js.map