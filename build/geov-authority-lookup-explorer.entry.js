import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';

// German Authority file (GND)
const TITLE_GND = 'German authority file (GND)';
const BASE_URI_GND = 'https://lobid.org/gnd/search?q=';
const SIZE_GND = '&size=';
const FORMAT_OUTPUT_GND = '&format=json:preferredName';
const TYPE_PERSON_GND = '&filter=type:Person';
const TYPE_PLACE_GND = '&filter=type:PlaceOrGeographicName';
const TYPE_GROUP_GND = '&filter=type:CorporateBody';
// Wikidata
const TITLE_WIKIDATA = 'Wikidata';
const ENDPOINT_SPARQL_WIKIDATA = 'https://query.wikidata.org/sparql';
const QR_SPARQL_WIKIDATA = (keywords, type, pageSize) => `SELECT DISTINCT * WHERE {
  SERVICE wikibase:mwapi {
      bd:serviceParam wikibase:endpoint "www.wikidata.org";
                      wikibase:api "EntitySearch";
                      mwapi:search "${keywords}";
                      mwapi:language "en".
      ?item wikibase:apiOutputItem mwapi:item.
      ?num wikibase:apiOrdinal true.
  }
  ?item rdfs:label ?name filter (lang(?name) = "en").
  ${type}
} ORDER BY ASC(?num) LIMIT ${pageSize}`;
const TYPE_PERSON_WIKIDATA = '?item wdt:P31 wd:Q5.';
const TYPE_PLACE_WIKIDATA = '?item wdt:P31/wdt:P279* wd:Q82794.';
const TYPE_GROUP_WIKIDATA = '?item wdt:P31/wdt:P279* wd:Q43229.';
// IdRef
const TITLE_IDREF = 'IdRef';
const BASE_URI_IDREF = 'https://www.idref.fr/Sru/Solr?q=';
const URL_IDREF = 'https://www.idref.fr/';
const SIZE_IDREF = '&start=0&rows=';
const FORMAT_OUTPUT_IDREF = '&indent=on&sort=score%20desc&fl=id,ppn_z,affcourt_z&version=2.2&wt=json';
const TYPE_ALL_IDREF = 'all:';
const TYPE_PERSON_IDREF = 'persname_t:';
const TYPE_PLACE_IDREF = 'geogname_t:';
const TYPE_GROUP_IDREF = 'corpname_t:';
// Geovistory
const TITLE_GEOVISTORY = 'Geovistory';
const ENDPOINT_SPARQL_GEOVISTORY = 'https://sparql.geovistory.org/api_v1_community_data';
const QR_SPARQL_GEOVISTORY = (keywords, type, pageSize) => `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX text: <http://jena.apache.org/text#>
PREFIX ontome: <https://ontome.net/ontology/>

SELECT DISTINCT ?item ?name ?classUri
WHERE
{
  	(?item) text:query ('${keywords}') .
  	?item rdfs:label ?name .
  	?item a ?classUri${type} .
}
LIMIT ${pageSize}
OFFSET 0`;
const TYPE_PERSON_GEOVISTORY = ', ontome:c21';
const TYPE_PLACE_GEOVISTORY = ', ontome:c363';
const TYPE_GROUP_GEOVISTORY = ', ontome:c68';

const geovAuthorityLookupExplorerCss = ":host {\n  display: block;\n}\n\n.colContent {\n  overflow: hidden; /* Hide overflow */\n  text-overflow: ellipsis; /*Add suspension points (...) to indicate cut content */\n  white-space: nowrap; /* Prevents content from going to line */\n}\n\n.containerResponsive {\n  container-type: inline-size;\n}\n\n.colButtons {\n  display: none;\n  text-align: right;\n  white-space: nowrap;\n}\n.colMenu {\n  text-align: right;\n}\n\n@container (width >= 320px) {\n  .colButtons {\n    display: block;\n  }\n\n  .colMenu {\n    display: none;\n  }\n}\n";

const GeovAuthorityLookupExplorer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = createEvent(this, "selected", 3);
    this.apiAllowedValues = ['gnd', 'wikidata', 'idref', 'geovistory'];
    this.api = undefined;
    this.keywords = undefined;
    this.type = undefined;
    this.nbOccurencesMax = 5;
    this.displaySelectBtn = true;
    this.displayOpenBtn = true;
    this.displayCopyBtn = false;
    this.uriData = undefined;
    this.title = undefined;
    this.popoverElement = undefined;
    this.isPopoverOpen = false;
    this.popoverItem = undefined;
    this.isLoadingData = false;
  }
  validateApiValue(newValue, oldValue) {
    if (!this.apiAllowedValues.includes(newValue)) {
      console.error('Invalid value for prop "api". It must be one of the allowed values.');
      this.api = oldValue;
    }
  }
  keywordsHandler(newValue) {
    this.keywords = newValue;
    this.executeAllQueries();
  }
  typeHandler(newValue) {
    this.type = newValue;
    this.executeAllQueries();
  }
  async getDataGND() {
    this.title = TITLE_GND;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      let queryApiGnd = BASE_URI_GND + this.keywords + SIZE_GND + this.nbOccurencesMax + FORMAT_OUTPUT_GND;
      if (this.type !== null && this.type === 'Person') {
        queryApiGnd = queryApiGnd + TYPE_PERSON_GND;
      }
      if (this.type !== null && this.type === 'Place') {
        queryApiGnd = queryApiGnd + TYPE_PLACE_GND;
      }
      if (this.type !== null && this.type === 'Group') {
        queryApiGnd = queryApiGnd + TYPE_GROUP_GND;
      }
      const response = await fetch(queryApiGnd);
      const data = await response.json();
      this.uriData = data.map((obj) => ({ uri: obj.id, label: obj.label }));
    }
  }
  async getDataWikiData() {
    var _a;
    this.title = TITLE_WIKIDATA;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      let qrWD = QR_SPARQL_WIKIDATA(this.keywords, '', this.nbOccurencesMax);
      if (this.type !== null && this.type === 'Person') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_PERSON_WIKIDATA, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Place') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_PLACE_WIKIDATA, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Group') {
        qrWD = QR_SPARQL_WIKIDATA(this.keywords, TYPE_GROUP_WIKIDATA, this.nbOccurencesMax);
      }
      const data = await sparqlJson(ENDPOINT_SPARQL_WIKIDATA, qrWD);
      this.uriData = (_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.bindings.map((obj) => ({ uri: obj.item.value, label: obj.name.value }));
    }
  }
  async getDataIdRef() {
    var _a;
    this.title = TITLE_IDREF;
    this.uriData = [];
    if (this.keywords.trim() != '') {
      const kw = this.keywords.trim().split(' ').join(' AND ');
      let queryApiIdRef = BASE_URI_IDREF + TYPE_ALL_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      if (this.type !== null && this.type === 'Person') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_PERSON_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      if (this.type !== null && this.type === 'Place') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_PLACE_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      if (this.type !== null && this.type === 'Group') {
        queryApiIdRef = BASE_URI_IDREF + TYPE_GROUP_IDREF + '(' + kw + ')' + SIZE_IDREF + this.nbOccurencesMax + FORMAT_OUTPUT_IDREF;
      }
      const response = await fetch(queryApiIdRef);
      const data = await response.json();
      this.uriData = (_a = data.response.docs) === null || _a === void 0 ? void 0 : _a.map((obj) => ({ uri: URL_IDREF + obj.ppn_z, label: obj.affcourt_z }));
    }
  }
  async getGeovistoryData() {
    var _a;
    this.title = TITLE_GEOVISTORY;
    this.uriData = [];
    const kw = this.keywords
      .trim()
      .split(' ')
      .map(word => `*${word}*`)
      .join(' AND ');
    if (kw.trim() != '') {
      let qrGV = QR_SPARQL_GEOVISTORY(kw, '', this.nbOccurencesMax);
      if (this.type !== null && this.type === 'Person') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_PERSON_GEOVISTORY, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Place') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_PLACE_GEOVISTORY, this.nbOccurencesMax);
      }
      if (this.type !== null && this.type === 'Group') {
        qrGV = QR_SPARQL_GEOVISTORY(kw, TYPE_GROUP_GEOVISTORY, this.nbOccurencesMax);
      }
      const data = await sparqlJson(ENDPOINT_SPARQL_GEOVISTORY, qrGV);
      this.uriData = (_a = data.results) === null || _a === void 0 ? void 0 : _a.bindings.map((obj) => ({ uri: obj.item.value, label: obj.name.value }));
    }
  }
  async executeAllQueries() {
    this.isLoadingData = true;
    if (this.api == 'gnd') {
      await this.getDataGND();
    }
    if (this.api == 'wikidata') {
      await this.getDataWikiData();
    }
    if (this.api == 'idref') {
      await this.getDataIdRef();
    }
    if (this.api == 'geovistory') {
      await this.getGeovistoryData();
    }
    this.isLoadingData = false;
  }
  handleClick(item) {
    this.isPopoverOpen = true;
    this.popoverItem = item;
  }
  handleDismiss() {
    this.isPopoverOpen = false;
  }
  handleSelected(item) {
    this.selected.emit({
      uri: item.uri,
    });
  }
  handleCopy(item) {
    navigator.clipboard.writeText(item.uri);
  }
  async componentDidLoad() {
    await this.executeAllQueries();
  }
  componentDidRender() {
    if (this.isPopoverOpen) {
      this.popoverElement.present();
      this.popoverElement.onDidDismiss().then(() => {
        this.isPopoverOpen = false;
      });
    }
  }
  render() {
    return (h(Host, null, this.isPopoverOpen && (h("ion-popover", { ref: el => (this.popoverElement = el) }, this.displaySelectBtn && (h("ion-button", { expand: "block", onClick: () => this.handleSelected(this.popoverItem) }, "Select")), this.displayOpenBtn && (h("ion-button", { expand: "block", href: this.popoverItem.uri, fill: "outline", target: "_blank" }, "Open", h("ion-icon", { name: "open-outline", slot: "end" }))), this.displayCopyBtn && (h("ion-button", { expand: "block", fill: "clear", onClick: () => this.handleCopy(this.popoverItem) }, "Copy", h("ion-icon", { name: "copy-outline", slot: "end" }))), h("ion-button", { expand: "block", fill: "clear", onClick: () => this.handleDismiss() }, h("ion-icon", { name: "close-circle-outline" })))), h("ion-card", null, h("ion-card-header", null, h("ion-card-subtitle", null, this.title)), h("ion-card-content", null, this.isLoadingData && (h("div", { style: { display: 'flex', justifyContent: 'center' } }, h("ion-spinner", null))), !this.isLoadingData && (h("ion-list", { lines: "full" }, this.uriData && this.uriData.length === 0 && h("ion-item", { lines: "none" }, "Nothing found"), this.uriData &&
      this.uriData.map((item, index) => (h("ion-item", { lines: index === this.uriData.length - 1 ? 'none' : 'full' }, h("ion-grid", { class: "containerResponsive" }, h("ion-row", null, h("ion-col", { class: "colContent" }, h("ion-label", null, h("h2", null, item.label), h("p", null, item.uri))), h("ion-col", { class: "colButtons" }, this.displayCopyBtn && (h("ion-button", { fill: "clear", onClick: () => this.handleCopy(item) }, "Copy", h("ion-icon", { name: "copy-outline", slot: "end" }))), this.displayOpenBtn && (h("ion-button", { fill: "clear", href: item.uri, target: "_blank" }, "Open", h("ion-icon", { name: "open-outline", slot: "end" }))), this.displaySelectBtn && h("ion-button", { onClick: () => this.handleSelected(item) }, "Select")), h("ion-col", { class: "colMenu" }, h("ion-button", { onClick: () => this.handleClick(item) }, h("ion-icon", { name: "menu-outline" })))))))))))), h("slot", null)));
  }
  static get watchers() { return {
    "api": ["validateApiValue"],
    "keywords": ["keywordsHandler"],
    "type": ["typeHandler"]
  }; }
};
GeovAuthorityLookupExplorer.style = geovAuthorityLookupExplorerCss;

export { GeovAuthorityLookupExplorer as geov_authority_lookup_explorer };

//# sourceMappingURL=geov-authority-lookup-explorer.entry.js.map