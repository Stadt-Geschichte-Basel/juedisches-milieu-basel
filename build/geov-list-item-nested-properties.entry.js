import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { g as getTimeSpanUri } from './getTimeSpanUri-fb206253.js';
import { r as regexReplace } from './regexReplace-9416bef5.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovListItemNestedPropertiesCss = ":host {\n  display: block;\n  width: 100%;\n}\n\ngeov-display-string-literal {\n  --border-top: none;\n  --padding-start: 0;\n  --min-height: 0;\n  --inner-padding-end: 0;\n}\n\ngeov-time-span {\n  display: inline;\n  padding-left: 1rem;\n  color: var(--ion-color-step-600);\n}\n\nion-item {\n  --padding-start: 0;\n}\n\n.containerForQuery {\n  container-type: inline-size;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.header {\n  padding: 1rem 16px 0.5rem 0;\n  flex-basis: 200px;\n  flex-grow: 1;\n  flex-shrink: 0;\n  border-bottom: dashed 1px var(--border-color);\n  border-right: dashed 1px var(--ion-color-tertiary);\n}\n\n.content ion-col {\n  flex-basis: 300px;\n}\n\n.content {\n  padding: 0.5rem 0 0.5rem 16px;\n  flex-basis: 300px;\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.header .classLabelContainer {\n  color: var(--gv-class-link-color, #000);\n}\n\n.header a.classLabel {\n  color: var(--gv-class-link-color, #000);\n  text-decoration: var(--gv-class-link-decoration);\n}\n\n.header a.classLabel:hover {\n  text-decoration: underline;\n}\n\n.nestedProp .propLabelWrapper a.propLabel {\n  color: var(--gv-property-link-color, #000);\n  text-decoration: var(--gv-property-link-decoration);\n}\n\n.nestedProp .propLabelWrapper a.propLabel:hover {\n  text-decoration: underline;\n}\n\nion-col {\n  padding: 0;\n  margin: 0;\n}\n\na.entityLink {\n  color: var(--gv-entity-link-color, #000);\n  text-decoration: var(--gv-entity-link-decoration);\n}\n\na.entityLink:hover {\n  text-decoration: underline;\n}\n\n.timespanLabel geov-time-span {\n  padding: 0;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n@container (width > 532px) {\n  .container {\n    flex-wrap: nowrap;\n  }\n\n  .header {\n    flex-grow: 0;\n    border-right: dashed 1px var(--border-color);\n    border-bottom: none;\n  }\n\n  .content ion-col {\n    flex-basis: 0px;\n  }\n}\n";

const qrNestedProps = (entityUri, language) => {
  return ` PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX xml: <http://www.w3.org/XML/1998/namespace>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX time: <http://www.w3.org/2006/time#>
    PREFIX ontome: <https://ontome.net/ontology/>
    PREFIX geov: <http://geovistory.org/resource/>

    SELECT
      ?predicate # predicate uri
      ?count # count of props per predicate
      ?object # one sample object per predicate
      (GROUP_CONCAT(DISTINCT ?pLabel; separator=", ") as ?predicateLabel) # predicate label
      (GROUP_CONCAT(DISTINCT ?oLabel; separator=", ") as ?objectLabel) # object label
    WHERE {

      # Innermost subquery:
      {
        # Select all properties of entity, group by predicate, count
        # and select one sample object per predicate
        SELECT ?predicate (count(?predicate) as ?count) (sample(?o) as ?object) WHERE {
          <${entityUri}> ?predicate ?o.
        }
        GROUP BY ?predicate
      }.

      # Left join predicate labels
      OPTIONAL {
        ?predicate rdfs:label ?pLabel . FILTER(LANG(?pLabel) IN ("${language}", "en")) .
      }.

      # Left join add object labels
      OPTIONAL {
        ?object rdfs:label ?oLabel
      }.
  }

  GROUP BY ?predicate ?count ?object
  # limit to max 50 predicate groups
  LIMIT 50`;
};
const GeovListItemNestedProperties = class {
  /*
   * assigns an id to the component
   */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._ssrId = undefined;
    this.data = undefined;
    this.fetchBeforeRender = true;
    this.sparqlEndpoint = undefined;
    this.entityUri = undefined;
    this.language = 'en';
    this.predicateInclude = undefined;
    this.predicateExclude = undefined;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
    this.color = '';
    this.parent = undefined;
    setSSRId(this);
  }
  async componentWillLoad() {
    if (this.fetchBeforeRender) {
      /**
       * try to get data from ssr
       */
      this.data = getSSRData(this._ssrId);
    }
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = {
        loading: true,
      };
      // fetch data via http
      await this.fetchData() // <- await this promise!
        .then(d => {
        var _a;
        // filter language
        d.nestedProps = (_a = d.nestedProps) !== null && _a !== void 0 ? _a : []; // this.filterByLanguage(d.nestedProps ?? [], this.language);
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
  render() {
    var _a, _b;
    const { rdfTypeProp, rdfsLabelProp, restProps } = this.splitProps(this.data.nestedProps);
    return (h(Host, null, h("div", { class: "containerForQuery" }, h("div", { class: "container" }, h("div", { class: "header" }, h("div", { class: 'classLabelContainer' }, h("geov-entity-class-icon", { classURI: rdfTypeProp.object.value }), h("a", { href: rdfTypeProp.object.value, target: "_blank", class: "classLabel" }, (_a = rdfTypeProp === null || rdfTypeProp === void 0 ? void 0 : rdfTypeProp.objectLabel) === null || _a === void 0 ? void 0 : _a.value), ' ', h("div", { class: 'timespanLabel' }, h("geov-time-span", { sparqlEndpoint: this.sparqlEndpoint, entityUri: getTimeSpanUri(this.entityUri) }))), h("div", { class: 'entityLabelContainer' }, h("a", { href: this.prepareUrl(this.entityUri), target: "_blank", class: "entityLink" }, (_b = rdfsLabelProp === null || rdfsLabelProp === void 0 ? void 0 : rdfsLabelProp.object) === null || _b === void 0 ? void 0 : _b.value))), h("div", { class: "content" }, h("ion-row", null, restProps.map(b => {
      var _a;
      return (h("ion-col", null, h("ion-item", { lines: "none", class: "nestedProp" }, h("ion-label", null, h("p", { class: "propLabelWrapper" }, this.renderPredicateLabel(b.predicateLabel, b.predicate)), this.countBiggerThanOne(b.count) ? (h("p", null, this.renderModal(b, (_a = rdfTypeProp === null || rdfTypeProp === void 0 ? void 0 : rdfTypeProp.objectLabel) === null || _a === void 0 ? void 0 : _a.value))) : (h("h3", null, this.renderObject(b.object, b.objectLabel, this.getPredicateLabel(b.predicateLabel, b.predicate))))))));
    }))))), h("slot", null)));
  }
  /**
   * Splits the property array into three parts:
   * - one rdfs:label prop (entity label)
   * - one rdf:type prop (class label)
   * - all other props
   * @param props
   * @returns
   */
  splitProps(props) {
    let rdfsLabelProp;
    let rdfTypeProp;
    const restProps = [];
    for (const p of props) {
      if (p.predicate.value === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type')
        rdfTypeProp = p;
      else if (p.predicate.value === 'http://www.w3.org/2000/01/rdf-schema#label')
        rdfsLabelProp = p;
      // push to rest, unless it is the inverse prop of parent
      else if (!this.isInverseOfParent(p))
        restProps.push(p);
    }
    // sort by prop label A-Z
    restProps.sort((a, b) => {
      var _a, _b, _c, _d;
      const labelA = (_b = (_a = a === null || a === void 0 ? void 0 : a.predicateLabel) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
      const labelB = (_d = (_c = b === null || b === void 0 ? void 0 : b.predicateLabel) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
      return labelA.localeCompare(labelB);
    });
    return {
      rdfTypeProp,
      rdfsLabelProp,
      restProps,
    };
  }
  /**
   * If the property is the inverse of the parent property, return true, else false.
   *
   * @param p
   */
  isInverseOfParent(p) {
    var _a, _b, _c;
    if (!((_a = this.parent) === null || _a === void 0 ? void 0 : _a.predicateUri) || !((_b = this.parent) === null || _b === void 0 ? void 0 : _b.subjectUri))
      return false;
    // if we have more then one props of this predicate, we in in fact have a
    // group of properties. This group is not identical to the parent property,
    // which is only one property by definition
    if (parseInt((_c = p.count) === null || _c === void 0 ? void 0 : _c.value) > 1)
      return false;
    const thisPredicate = p.predicate.value;
    const parentPredicate = this.parent.predicateUri;
    const isInversePredicate = () => {
      const overlapOne = thisPredicate.replace(parentPredicate, '');
      const overlapTwo = parentPredicate.replace(thisPredicate, '');
      return overlapOne === 'i' || overlapTwo == 'i';
    };
    // it is inverse, in case object = parentSubject and predicate isInverseOf parentPredicate
    if (p.object.value === this.parent.subjectUri && isInversePredicate())
      return true;
    return false;
  }
  async fetchData() {
    let d = {
      loading: true,
    };
    const query = qrNestedProps(this.entityUri, this.language);
    await sparqlJson(this.sparqlEndpoint, query)
      .then(res => {
      var _a;
      d = {
        loading: false,
        nestedProps: (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings,
      };
    })
      .catch(_ => {
      d = {
        loading: false,
        error: true,
      };
    });
    return d;
  }
  /**
   * render the predicate label
   * @param predicateLabel
   * @param predicate
   * @returns jsx element
   */
  renderPredicateLabel(predicateLabel, predicate) {
    return (h("a", { class: "propLabel", href: predicate.value, target: "_blank" }, this.getPredicateLabel(predicateLabel, predicate)));
  }
  /**
   * extract the predicate label string from predicate label and predicate bindings.
   * It returns the predicate label, if available, else the predicate uri.
   * in case the predicate uri is rendered, abbreviate the most common uris.
   * @param predicateLabel
   * @param predicate
   * @returns string
   */
  getPredicateLabel(predicateLabel, predicate) {
    var _a;
    return (_a = predicateLabel === null || predicateLabel === void 0 ? void 0 : predicateLabel.value) !== null && _a !== void 0 ? _a : predicate.value.replace('http://www.w3.org/2000/01/rdf-schema#', 'rdfs:').replace('http://www.w3.org/1999/02/22-rdf-syntax-ns#', 'rdf:');
  }
  /**
   * render the count information (only if count > 1)
   * @param count
   * @returns jsx element
   */
  renderModal(nestedProps, title) {
    var _a, _b;
    return (h("geov-entity-predicate-modal", { modalTitle: title, sparqlEndpoint: this.sparqlEndpoint, entityUri: this.entityUri, totalCount: parseInt((_a = nestedProps.count) === null || _a === void 0 ? void 0 : _a.value), language: this.language, predicateUri: nestedProps.predicate.value, predicateLabel: nestedProps.predicateLabel.value, fetchBeforeRender: false }, h("span", { class: "pointer" }, " ", (_b = nestedProps.count) === null || _b === void 0 ? void 0 :
      _b.value, " items...")));
  }
  /**
   * Check if count is bigger than 1.
   * @param count
   * @returns true if count > 1, else false.
   */
  countBiggerThanOne(count) {
    const c = parseInt(count === null || count === void 0 ? void 0 : count.value);
    return c > 1;
  }
  renderObject(object, objectLabel, modalTitle) {
    var _a;
    // if object is a URI
    if ((object === null || object === void 0 ? void 0 : object.type) === 'uri') {
      return (h("a", { href: this.prepareUrl(object === null || object === void 0 ? void 0 : object.value), target: "_blank", class: "entityLink" }, (_a = objectLabel === null || objectLabel === void 0 ? void 0 : objectLabel.value) !== null && _a !== void 0 ? _a : object === null || object === void 0 ? void 0 : object.value));
    }
    // return object?.value;
    // else it is a literal
    switch (object === null || object === void 0 ? void 0 : object.datatype) {
      case 'http://www.opengis.net/ont/geosparql#wktLiteral':
        return h("geov-display-geosparql-wktliteral", { color: this.color, value: object === null || object === void 0 ? void 0 : object.value });
      case 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString':
      case 'http://www.w3.org/2001/XMLSchema#string':
      default:
        return h("geov-display-string-literal", { color: this.color, modalTitle: modalTitle, label: object === null || object === void 0 ? void 0 : object.value, language: object === null || object === void 0 ? void 0 : object['xml:lang'] });
    }
  }
  /**
   * Prepares a url by applying the uirRegex and uriReplace
   *
   * @param url
   * @returns string
   */
  prepareUrl(url) {
    return regexReplace(url, this.uriRegex, this.uriReplace);
  }
};
GeovListItemNestedProperties.style = geovListItemNestedPropertiesCss;

export { GeovListItemNestedProperties as geov_list_item_nested_properties };

//# sourceMappingURL=geov-list-item-nested-properties.entry.js.map