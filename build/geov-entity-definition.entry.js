import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovEntityDefinitionCss = ":host{display:block}";

const qrLabel = (id) => `
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT  ?definition
WHERE {
  geov:${id} ontome:p1762 / ontome:p1864 ?definition;
}
LIMIT 10
`;
const GeovEntityDefinition = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._ssrId = undefined;
    this.sparqlEndpoint = undefined;
    this.entityId = undefined;
    this.emptyPlaceholder = '';
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
      var _a, _b;
      return Object.assign(Object.assign({}, this.data), { definitions: (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b.map(b => { var _a; return (_a = b.definition) === null || _a === void 0 ? void 0 : _a.value; }), loading: false });
    })
      .catch(_ => {
      return Object.assign(Object.assign({}, this.data), { error: true, loading: false });
    });
  }
  render() {
    return (h(Host, null, this.data.definitions.map(definition => (h("p", { class: "definition" }, definition))), this.data.loading && `loading...`, this.data.error && `error!`, !this.data.definitions.length && !this.data.loading && !this.data.error && this.emptyPlaceholder && h("span", { class: "no-label-found" }, this.emptyPlaceholder), h("slot", null)));
  }
};
GeovEntityDefinition.style = geovEntityDefinitionCss;

export { GeovEntityDefinition as geov_entity_definition };

//# sourceMappingURL=geov-entity-definition.entry.js.map