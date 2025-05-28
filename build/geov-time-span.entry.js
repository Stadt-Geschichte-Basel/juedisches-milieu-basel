import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovTimeSpanCss = ":host{display:block}";

const qr = (entityUri) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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
      (SAMPLE(?y) as ?year)
      (SAMPLE(?m) as ?month)
      (SAMPLE(?d) as ?day)
      (SAMPLE(?tUnit) as ?timeUnit)

    WHERE {

      # Innermost subquery:
      {
        # Select all properties of entity, group by predicate
        # and select one sample object per predicate
        SELECT ?predicate (sample(?o) as ?object) WHERE {
          <${entityUri}> ?predicate ?o.
        }
        GROUP BY ?predicate
      }.

  	  # Left year, month, day
      OPTIONAL { ?object time:year ?y }.
      OPTIONAL { ?object time:month ?m }.
      OPTIONAL { ?object time:day ?d }.
      OPTIONAL { ?object time:unitType ?tUnit }.
  }

  GROUP BY ?predicate ?object
  # limit to max 50 predicate groups
  LIMIT 50`;
const GeovTimeSpan = class {
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
        // filter language
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
  async fetchData() {
    let d = {
      loading: true,
    };
    const query = qr(this.entityUri);
    await sparqlJson(this.sparqlEndpoint, query)
      .then(res => {
      var _a;
      d = {
        loading: false,
        rows: (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings,
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
   * Converts the rows into a readable string
   *
   * In case there are mutiple dates, the output is {earliest} – {latest}:
   * 1739-11-25 – 1740-07-08
   *
   * In case there is one date, the output is {date}:
   * 1739-11-25
   *
   * In case there is no date, the output is empty
   *
   * @param rows
   */
  rowsToString(rows) {
    const timeInfos = rows
      // map rows to year month time
      .map(r => this.getTime(r))
      // filter items with time info
      .filter(timeInfo => !!timeInfo.timeUnit)
      // sort earliest date first
      .sort((a, b) => {
      // Compare years
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      // Compare months
      if (a.month !== b.month) {
        return a.month - b.month;
      }
      // Compare days
      return a.day - b.day;
    });
    // return if we have no time info
    if (timeInfos.length === 0)
      return;
    const earliest = timeInfos[0];
    const latest = timeInfos[timeInfos.length - 1];
    if (earliest === latest)
      return this.timeInfoToString(earliest);
    return `${this.timeInfoToString(earliest)} – ${this.timeInfoToString(latest)}`;
  }
  /**
   * Extracts TimeInfo from a Row
   */
  getTime(row) {
    var _a, _b, _c, _d, _e, _f;
    return {
      year: parseInt((_a = row.year) === null || _a === void 0 ? void 0 : _a.value),
      month: parseInt((_c = (_b = row.month) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.replace('--', '')),
      day: parseInt((_e = (_d = row.day) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.replace('---', '')),
      timeUnit: (_f = row.timeUnit) === null || _f === void 0 ? void 0 : _f.value,
    };
  }
  /**
   * Converts a timeInfo to a string
   * @param timeInfo
   * @returns
   */
  timeInfoToString(timeInfo) {
    switch (timeInfo.timeUnit) {
      case 'http://www.w3.org/2006/time#unitYear':
        return `${timeInfo.year}`;
      case 'http://www.w3.org/2006/time#unitMonth':
        return `${timeInfo.year}-${timeInfo.month.toString().padStart(2, '0')}`;
      case 'http://www.w3.org/2006/time#unitDay':
      default:
        return `${timeInfo.year}-${timeInfo.month.toString().padStart(2, '0')}-${timeInfo.day.toString().padStart(2, '0')}`;
    }
  }
  render() {
    return h(Fragment, null, this.rowsToString(this.data.rows));
  }
};
GeovTimeSpan.style = geovTimeSpanCss;

export { GeovTimeSpan as geov_time_span };

//# sourceMappingURL=geov-time-span.entry.js.map