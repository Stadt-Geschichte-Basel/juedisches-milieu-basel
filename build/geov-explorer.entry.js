import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { g as getSSRData, a as setSSRData, s as setSSRId } from './setSSRId-eefe96ce.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';

/**
 * Transforms a string into a jena-lucene search string
 * @param s search string entered by user
 * @returns search string usable for lucene text search
 */
const getTextFilter = (s) => s
  .trim()
  .replace('*', ' ')
  .split(' ')
  .map(word => {
  return '*' + word + '*';
})
  .join(' AND '); // will form like this : *Girard* AND *Grégoire*

const getQuery$2 = (searchString) => `# classes
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX text: <http://jena.apache.org/text#>

SELECT ?class ?label ?count
WHERE {
  {
    SELECT  ?class (count(distinct ?entityUri) as ?count)
    WHERE {
      ${searchString ? `(?entityUri) text:query ('${getTextFilter(searchString)}') . ` : ``}
 	   ?entityUri a ?class .
    }
    GROUP BY ?class
    ORDER by DESC(?count)
  }
  ?class rdfs:label ?label
}
HAVING(?label != "")
`;
class ClassFilterFetcher {
  async fetch(sparqlEndpoint, searchString) {
    this.promiseWithCancel = sparqlJson(sparqlEndpoint, getQuery$2(searchString));
    return this.promiseWithCancel
      .then(res => {
      var _a, _b;
      // process and return the data in case of success
      const x = {
        items: (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b.map(b => ({ classLabel: b.label.value, classUri: b.class.value, instanceCount: Number(b.count.value) })),
        loading: false,
      };
      return x;
    })
      .catch(_ => {
      // process and return the data in case of error
      const x = {
        error: true,
        loading: false,
      };
      return x;
    });
  }
}

const getQuery$1 = (searchString, classUris, limit, offset) => {
  return `# entities
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX text: <http://jena.apache.org/text#>
  SELECT ?entityUri ?entityLabel ?classUri ?classLabel
  {
    {
    SELECT DISTINCT ?entityUri  ?entityLabel ?classUri ?classLabel {
        {
          SELECT DISTINCT ?entityUri ?entityLabel ?classUri
          {
              {
                    SELECT ?entityUri  ?entityLabel
                    {
                        ${searchString ? `(?entityUri) text:query ('${getTextFilter(searchString)}') . ` : ``}

                        ${!(classUris === null || classUris === void 0 ? void 0 : classUris.length)
    ? `
                        {
                          {
                            SELECT DISTINCT  ?classWithInstances
                            WHERE {
                              ?entityUri a ?classWithInstances .
                            }
                            GROUP BY ?classWithInstances
                          }
                        }
                        {?entityUri a ?classWithInstances .}
                        `
    : ``}

                        ${classUris.map(x => `{?entityUri a <${x}> .}`).join('\nUNION\n')}
                        OPTIONAL {?entityUri rdfs:label ?entityLabel .}

                  }
                  LIMIT ${limit}
                  OFFSET ${offset}
              }
              ?entityUri a ?classUri .
          }
        }
        OPTIONAL { ?classUri rdfs:label ?classLabel .}
      }
      HAVING (?classLabel!="")
    }
  }
`;
};
class EntityListFetcher {
  async fetch(sparqlEndpoint, searchString, classUris, limit, offset) {
    this.promiseWithCancel = sparqlJson(sparqlEndpoint, getQuery$1(searchString, classUris, limit, offset));
    return this.promiseWithCancel
      .then(res => {
      var _a, _b;
      // process and return the data in case of success
      const x = {
        items: (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b.map(b => ({ classLabel: b.classLabel.value, entityLabel: b.entityLabel.value, entityUri: b.entityUri.value, classUri: b.classUri.value })),
        loading: false,
      };
      return x;
    })
      .catch(_ => {
      // process and return the data in case of error
      const x = {
        error: true,
        loading: false,
      };
      return x;
    });
  }
}

const getQuery = (searchString, classUris) => {
  return `# count
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX text: <http://jena.apache.org/text#>

SELECT (count(distinct ?entityUri) as ?count)
WHERE {
  ${searchString ? `(?entityUri) text:query ('${getTextFilter(searchString)}') . ` : ``}

  ${!(classUris === null || classUris === void 0 ? void 0 : classUris.length)
    ? `
          {
            {
              SELECT DISTINCT  ?classWithInstances
              WHERE {
                 ?entityUri a ?classWithInstances .
              }
              GROUP BY ?classWithInstances
            }
          }
          {?entityUri a ?classWithInstances .}
          `
    : `${classUris.map(x => `{?entityUri a <${x}> .}`).join('\nUNION\n')}`}
}
`;
};
class FullCountFetcher {
  async fetch(sparqlEndpoint, searchString, classUris) {
    this.promiseWithCancel = sparqlJson(sparqlEndpoint, getQuery(searchString, classUris));
    return this.promiseWithCancel
      .then(res => {
      var _a, _b, _c;
      // process and return the data in case of success
      const x = {
        count: Number((_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.count.value),
        loading: false,
      };
      return x;
    })
      .catch(_ => {
      // process and return the data in case of error
      const x = {
        error: true,
        loading: false,
      };
      return x;
    });
  }
}

const geovExplorerCss = ":host{display:block}.entity-count-col{align-items:center;display:flex;flex-direction:row}.entity-count-label{height:1rem;padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}.entity-count-sm{margin-top:2px;margin-bottom:1rem;display:block}ion-searchbar{padding-bottom:0}.paginator-container{margin-top:1rem;align-items:center}.paginator{margin-left:auto}";

const GeovExplorer = class {
  set data(d) {
    this.entityList = d === null || d === void 0 ? void 0 : d.entityList;
    this.classSelect = d === null || d === void 0 ? void 0 : d.classSelect;
    this.fullCount = d === null || d === void 0 ? void 0 : d.fullCount;
    this.__data = d;
  }
  get data() {
    return this.__data;
  }
  set offset(val) {
    this._offset = val;
    this.fetchEntityListData();
  }
  get offset() {
    return this._offset;
  }
  set searchString(val) {
    this._searchString = val;
    this.offset = 0;
    this.fetchClassSelectData();
    this.fetchEntityListData();
    this.fetchFullCountData();
  }
  get searchString() {
    return this._searchString;
  }
  set selectedClass(val) {
    var _a;
    if (((_a = this._selectedClass) === null || _a === void 0 ? void 0 : _a.classUri) !== (val === null || val === void 0 ? void 0 : val.classUri)) {
      this._selectedClass = val;
      this._offset = 0;
      this.fetchEntityListData();
      this.fetchFullCountData();
    }
  }
  get selectedClass() {
    return this._selectedClass;
  }
  /**
   * called once when component is ready. good for data fetching.
   * if `componentWillLoad()` returns a promise, stencil hydrate
   * awaits this promise for server side rendering. See:
   * https://stenciljs.com/docs/static-site-generation-basics
   */
  componentWillLoad() {
    this._searchString = this.initSearchString;
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);
    // if no data found, fetchData
    if (!this.data) {
      // fetch data via http
      const promise = this.fetchData()
        .then(d => {
        this.data = d;
        setSSRData(this._ssrId, d);
        return d;
      })
        .catch(d => {
        this.data = d;
        return d;
      });
      if (this.fetchBeforeRender)
        return promise; // <- await this promise!
    }
  }
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.limit = 10;
    this._ssrId = undefined;
    this.sparqlEndpoint = undefined;
    this.fetchBeforeRender = false;
    this.initSearchString = undefined;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
    this.preferredItems = undefined;
    this.classUriPrefix = undefined;
    this.entityList = undefined;
    this.classSelect = undefined;
    this.fullCount = undefined;
    this._offset = 0;
    // set id for server side rendering of dynamic data
    setSSRId(this);
  }
  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData() {
    return Promise.all([await this.fetchClassSelectData(), this.fetchEntityListData(), this.fetchFullCountData()]).then(([classSelect, entityList, fullCount]) => {
      return { classSelect, entityList, fullCount, loading: false };
    });
  }
  async fetchClassSelectData() {
    this.classSelect = { loading: true };
    // if there is an ongoing fetch, cancel it
    if (this.fetchClassSelect)
      this.fetchClassSelect.promiseWithCancel.cancel();
    this.fetchClassSelect = new ClassFilterFetcher();
    this.classSelect = await this.fetchClassSelect.fetch(this.sparqlEndpoint, this.searchString);
    // unset ongoing fetch
    this.fetchClassSelect = undefined;
    return this.classSelect;
  }
  async fetchEntityListData() {
    this.entityList = { loading: true };
    // if there is an ongoing fetch, cancel it
    if (this.fetchEntityList)
      this.fetchEntityList.promiseWithCancel.cancel();
    this.fetchEntityList = new EntityListFetcher();
    this.entityList = await this.fetchEntityList.fetch(this.sparqlEndpoint, this.searchString, this.selectedClass ? [this.selectedClass.classUri] : [], this.limit, this.offset);
    // unset ongoing fetch
    this.fetchEntityList = undefined;
    return this.entityList;
  }
  async fetchFullCountData() {
    this.fullCount = { loading: true };
    // if there is an ongoing fetch, cancel it
    if (this.fetchFullCount)
      this.fetchFullCount.promiseWithCancel.cancel();
    this.fetchFullCount = new FullCountFetcher();
    this.fullCount = await this.fetchFullCount.fetch(this.sparqlEndpoint, this.searchString, this.selectedClass ? [this.selectedClass.classUri] : []);
    // unset ongoing fetch
    this.fetchFullCount = undefined;
    return this.fullCount;
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, null, h("ion-grid", null, h("ion-row", null, h("ion-col", { sizeMd: "0", sizeLg: "6", sizeXl: "3", class: "entity-count-col ion-hide-lg-down" }), h("ion-col", { sizeMd: "12", sizeLg: "6", sizeXl: "9" }, h("ion-searchbar", { value: this.searchString, debounce: 300, onIonChange: e => {
        this.searchString = e.detail.value;
      } }), h("geov-class-select-popup", { class: "ion-hide-lg-up", onSelectionChanged: e => {
        this.selectedClass = e.detail.value;
      }, ref: el => {
        var _a;
        el.initValue = this.selectedClass;
        el.items = (_a = this.classSelect) === null || _a === void 0 ? void 0 : _a.items;
      } }), h("ion-note", { class: "entity-count-sm entity-count-label" }, ((_a = this.fullCount) === null || _a === void 0 ? void 0 : _a.loading) ? h("ion-skeleton-text", { animated: true, style: { width: '40px' } }) : h("span", null, (_b = this.fullCount) === null || _b === void 0 ? void 0 :
      _b.count, " Entities"), ' '))), h("ion-row", null, h("ion-col", { sizeMd: "0", sizeLg: "6", sizeXl: "3", class: "ion-hide-lg-down" }, h("geov-class-radio-group", { onSelectionChanged: e => {
        this.selectedClass = e.detail.value;
      }, ref: el => {
        var _a, _b;
        el.initValue = this.selectedClass;
        el.preferredItems = this.preferredItems;
        if (this.classUriPrefix)
          el.uriPrefix = this.classUriPrefix;
        el.items = (_a = this.classSelect) === null || _a === void 0 ? void 0 : _a.items;
        el.loading = (_b = this.classSelect) === null || _b === void 0 ? void 0 : _b.loading;
      } })), h("ion-col", { sizeMd: "12", sizeLg: "6", sizeXl: "9" }, h("geov-entity-list", { defaultPageSize: this.limit, uriRegex: this.uriRegex, uriReplace: this.uriReplace, ref: el => {
        var _a, _b;
        el.items = (_a = this.entityList) === null || _a === void 0 ? void 0 : _a.items;
        el.loading = (_b = this.entityList) === null || _b === void 0 ? void 0 : _b.loading;
      } }), h("ion-item", { class: "paginator-container", lines: "none" }, ((_c = this.fullCount) === null || _c === void 0 ? void 0 : _c.count) && !((_d = this.fullCount) === null || _d === void 0 ? void 0 : _d.loading) && (h("geov-paginator", { class: "paginator", onPageChanged: e => {
        console.log('onPageChanged');
        this.offset = e.detail.pageSize * e.detail.pageIndex;
      }, pageSize: this.limit, length: (_e = this.fullCount) === null || _e === void 0 ? void 0 : _e.count })))))), h("slot", null)));
  }
};
GeovExplorer.style = geovExplorerCss;

export { GeovExplorer as geov_explorer };

//# sourceMappingURL=geov-explorer.entry.js.map