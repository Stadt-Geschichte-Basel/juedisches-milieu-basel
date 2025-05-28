import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovIfCss = ":host{display:block}";

const GeovIf = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._ssrId = undefined;
    this.sparqlEndpoint = undefined;
    this.sparqlQuery = undefined;
    this.data = { loading: true, showChildren: false };
    setSSRId(this);
  }
  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true, showChildren: false };
      await this.fetchData()
        .then(d => {
        this.data = d;
        setSSRData(this._ssrId, d);
        return d;
      })
        .catch(d => {
        this.data = d;
        return d;
      });
    }
  }
  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData() {
    const q = this.sparqlQuery
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
    return sparqlJson(this.sparqlEndpoint, q)
      .then(res => {
      var _a, _b, _c, _d;
      const showChildren = ((_d = (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.condition) === null || _d === void 0 ? void 0 : _d.value) === 'true' ? true : false;
      return Object.assign(Object.assign({}, this.data), { showChildren, loading: false });
    })
      .catch(_ => {
      return Object.assign(Object.assign({}, this.data), { error: true, loading: false });
    });
  }
  render() {
    const display = this.data.showChildren ? 'initital' : 'none';
    return (h(Host, null, h("div", { style: { display: display } }, h("slot", null))));
  }
};
GeovIf.style = geovIfCss;

export { GeovIf as geov_if };

//# sourceMappingURL=geov-if.entry.js.map