import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovEntityLabelCss = ":host{display:block;margin-top:0}";

const qrLabel = (id) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?o
WHERE {
  geov:${id} rdfs:label ?o .
}
LIMIT 1
`;
const GeovEntityLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._ssrId = undefined;
    this.sparqlEndpoint = undefined;
    this.entityId = undefined;
    this.data = undefined;
    setSSRId(this);
  }
  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };
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
    return sparqlJson(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
      var _a, _b, _c, _d;
      return Object.assign(Object.assign({}, this.data), { label: (_d = (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.o) === null || _d === void 0 ? void 0 : _d.value, loading: false });
    })
      .catch(_ => {
      return Object.assign(Object.assign({}, this.data), { error: true, loading: false });
    });
  }
  render() {
    return (h(Host, null, this.data.label, this.data.loading && `loading...`, this.data.error && `error!`, !this.data.label && !this.data.loading && !this.data.error && h("span", { class: "no-label-found" }, "no label found"), h("slot", null)));
  }
};
GeovEntityLabel.style = geovEntityLabelCss;

export { GeovEntityLabel as geov_entity_label };

//# sourceMappingURL=geov-entity-label.entry.js.map