import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';

const appVideoCss = ":host{display:block}figure{display:block;margin:1rem 0 3rem 0}::slotted([slot=\"caption\"]){margin-top:.5rem;font-size:.8rem}";

const AppVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("figure", null, h("slot", null), h("figcaption", null, h("slot", { name: 'caption' })))));
  }
};
AppVideo.style = appVideoCss;

export { AppVideo as app_video };

//# sourceMappingURL=app-video.entry.js.map