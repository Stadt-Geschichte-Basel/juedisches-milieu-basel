import { r as registerInstance, i as h, m as Host, f as getAssetPath } from './index-c3fe8f75.js';

const appImgCss = ":host{display:block}figure{display:block;margin:1rem 0 3rem 0}figcaption{margin-top:.5rem;font-size:.8rem}";

const AppImg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = undefined;
  }
  render() {
    return (h(Host, null, h("figure", null, h("ion-img", { src: getAssetPath(this.src) }), h("figcaption", null, h("slot", null)))));
  }
};
AppImg.style = appImgCss;

export { AppImg as app_img };

//# sourceMappingURL=app-img.entry.js.map