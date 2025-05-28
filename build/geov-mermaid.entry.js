import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { i as isNode } from './isNode-e6f1444c.js';

/**
 * Load and return mermaid library from CDN in browsers.
 * In node server environment returns null.
 * @returns Mermaid (in browser) or null (in server)
 */
const importMermaid = async () => new Promise((resolve, reject) => {
  // if we are on a node server resolve with null
  if (isNode())
    return resolve(null);
  // if mermaid is already defined resolve it
  if ('mermaid' in window) {
    return resolve(window['mermaid']);
  }
  // create new script element
  const script = document.createElement(`script`);
  // set type
  script.type = 'module';
  // create event names
  const loadedChannel = 'mermaid-loaded';
  const errorChannel = 'mermaid-loading-error';
  script.innerHTML = `
      try {
        // load mermaid
        var mermaid = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');

        // add to window
        window.mermaid = mermaid.default;

        // dispatch loaded event
        window.dispatchEvent(new Event("${loadedChannel}"));

      } catch (error) {
        // dispatch error event
        window.dispatchEvent(new CustomEvent("${errorChannel}", {detail: error}));
      }
    `;
  // callback on mermaid loaded
  const onLoaded = () => {
    // unregister the event listener
    window.removeEventListener(loadedChannel, onLoaded);
    // resolve
    resolve(window['mermaid']);
  };
  // register on load callback and resolve Plotly
  window.addEventListener(loadedChannel, onLoaded);
  // callback on mermaid loading error
  const onError = error => {
    // unregister the event listener
    window.removeEventListener(errorChannel, onError);
    // resolve
    reject(error.detail);
  };
  // register on load callback and resolve Plotly
  window.addEventListener(errorChannel, onError);
  // append script to load Plotly from CDN to document
  document.body.appendChild(script);
});

const geovMermaidCss = ":host{display:block}";

const GeovMermaid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = '';
    this.svg = undefined;
    this.error = undefined;
  }
  async componentWillLoad() {
    this.mermaid = await importMermaid();
  }
  async componentDidLoad() {
    this.createSVG;
  }
  extractChartString() {
    var _a, _b;
    const firstChild = (_b = (_a = this.slotElement) === null || _a === void 0 ? void 0 : _a.assignedNodes()) === null || _b === void 0 ? void 0 : _b[0];
    if ((firstChild === null || firstChild === void 0 ? void 0 : firstChild.nodeType) !== 3) {
      return (this.error = 'Please place (only) the mermaid chart string in the geov-mermaid element');
    }
    return firstChild.data;
  }
  async createSVG() {
    if (!this.mermaid)
      return;
    const chart = this.extractChartString();
    try {
      const { svg } = await this.mermaid.render('graphDiv', chart);
      this.svg = svg;
    }
    catch (error) {
      this.error = error.toString();
    }
  }
  render() {
    return (h(Host, null, h("span", { style: { display: 'none' } }, h("slot", { onSlotchange: () => this.createSVG(), ref: (el) => (this.slotElement = el) })), h("div", { innerHTML: this.svg }), this.error && h("pre", { style: { color: 'red' } }, this.error)));
  }
};
GeovMermaid.style = geovMermaidCss;

export { GeovMermaid as geov_mermaid };

//# sourceMappingURL=geov-mermaid.entry.js.map