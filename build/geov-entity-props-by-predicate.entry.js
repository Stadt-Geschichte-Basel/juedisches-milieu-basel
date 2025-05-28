import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';
import { o as openOutline } from './index-8d6f5b95.js';
import { r as regexReplace } from './regexReplace-9416bef5.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';
import { s as setSSRId, g as getSSRData, a as setSSRData } from './setSSRId-eefe96ce.js';

const geovEntityPropsByPredicateCss = "html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}html.md{--ion-default-font:\"Roboto\", \"Helvetica Neue\", sans-serif}html{--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}:host{display:block}ion-list{--ion-item-background:none}ion-item.heading{--padding-start:0;--inner-padding-end:0;--ion-item-background:none}geov-paginator{margin-left:auto}a.propertyLabel,a.propertyLabel:visited{text-decoration:var(--gv-property-link-decoration, none)}a.propertyLabel:hover{color:var(--ion-color-primary-shade, #5e3eaa);text-decoration:underline}a.propertyLabel{color:var(--gv-property-link-color, black);font-size:1.5rem}";

const qrProps = (predicateId, subjectUri, pageSize, offset, language) => `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?entity ?entityLabel ?entityType ?entityTypeLabel ?dt
WHERE {
  <${subjectUri}> <${predicateId}> ?entity .
  OPTIONAL {?entity rdfs:label ?entityLabel . FILTER(LANG(?entityLabel) IN ("${language}", "en")) .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel . FILTER(LANG(?entityTypeLabel) IN ("${language}", "en")) .}}
  BIND (datatype(?entity) AS ?dt) .
}
LIMIT ${pageSize} OFFSET ${offset}
`;
const GeovEntityPropsByPredicate = class {
  /*
   * assigns an id to the component
   */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageChanged = createEvent(this, "pageChanged", 7);
    this._ssrId = undefined;
    this.data = undefined;
    this.fetchBeforeRender = true;
    this.entityUri = undefined;
    this.sparqlEndpoint = undefined;
    this.totalCount = undefined;
    this.pageSize = 3;
    this.language = undefined;
    this.predicateUri = undefined;
    this.predicateLabel = undefined;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
    this.color = '';
    this.pageIndex = 0;
    this.entities = undefined;
    setSSRId(this);
  }
  async componentWillLoad() {
    if (this.fetchBeforeRender) {
      /**
       * try to get data from ssr
       */
      this.data = getSSRData(this._ssrId);
    }
    // if no data found (or fetchBeforeRender is false), fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };
      await this.pageReload()
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
  changePage(pageEvent) {
    this.pageIndex = pageEvent.detail.pageIndex;
    this.data = { loading: true };
    this.pageReload()
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
  async pageReload() {
    const qr = qrProps(this.predicateUri, this.entityUri, this.pageSize, this.pageIndex * this.pageSize, this.language);
    return sparqlJson(this.sparqlEndpoint, qr)
      .then(res => {
      var _a;
      return {
        entities: (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings,
        loading: false,
      };
    })
      .catch(_ => {
      return {
        error: true,
        loading: false,
      };
    });
  }
  render() {
    var _a, _b;
    const showPaginator = this.totalCount > this.pageSize;
    //const contentMinHeight = showPaginator ? this.pageSize * 62 : 0;
    return (h(Host, null, h("ion-grid", { fixed: true }, h("ion-item", { class: "heading", color: this.color, lines: "full" }, h("a", { class: "propertyLabel", href: this.predicateUri }, this.predicateLabel), showPaginator && this.renderPaginator()), h("ion-list", { lines: "full" }, (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.entities) === null || _b === void 0 ? void 0 : _b.map(entity => this.renderItem(entity))))));
  }
  renderItem(item) {
    const isUri = item.entity.type === 'uri';
    if (isUri) {
      return this.renderUri(item);
    }
    return (h("ion-item", null, h("ion-label", null, this.renderLiteral(item))));
  }
  renderUri(item) {
    var _a;
    const klass = (_a = item.entityType) === null || _a === void 0 ? void 0 : _a.value;
    switch (klass) {
      case undefined:
        return this.renderExternalUri(item);
      // here you can add more class-specific renderings
      default:
        return this.renderGenericEntity(item);
    }
  }
  renderExternalUri(item) {
    var _a, _b, _c;
    const regex = this.uriRegex;
    const replace = this.uriReplace;
    const url = regexReplace(item.entity.value, regex, replace);
    const isInternal = url.includes('geovistory.org');
    const target = isInternal ? '' : '_blank';
    const detailIcon = isInternal ? undefined : openOutline;
    return (h("ion-item", { color: this.color, href: url, target: target, detailIcon: detailIcon }, ((_a = item.entityLabel) === null || _a === void 0 ? void 0 : _a.value) ? h("p", null, (_b = item.entityLabel) === null || _b === void 0 ? void 0 : _b.value) : h("p", null, (_c = item.entity) === null || _c === void 0 ? void 0 : _c.value)));
  }
  renderGenericEntity(item) {
    return (h("ion-item", null, h("geov-list-item-nested-properties", { sparqlEndpoint: this.sparqlEndpoint, entityUri: item.entity.value, language: "en", fetchBeforeRender: this.fetchBeforeRender, parent: { subjectUri: this.entityUri, predicateUri: this.predicateUri }, uriRegex: this.uriRegex, uriReplace: this.uriReplace })));
  }
  renderPaginator() {
    return (h("geov-paginator", { color: this.color, length: this.totalCount, pageSize: this.pageSize, pageIndex: this.pageIndex, onPageChanged: ev => this.changePage(ev), showFirstLastButtons: false }));
  }
  renderLiteral(item) {
    var _a, _b, _c, _d;
    switch ((_a = item.dt) === null || _a === void 0 ? void 0 : _a.value) {
      case 'http://www.opengis.net/ont/geosparql#wktLiteral':
        return h("geov-display-geosparql-wktliteral", { color: this.color, value: (_b = item.entity) === null || _b === void 0 ? void 0 : _b.value });
      case 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString':
      case 'http://www.w3.org/2001/XMLSchema#string':
      default:
        return (h("geov-display-string-literal", { color: this.color, modalTitle: this.predicateLabel, label: (_c = item.entity) === null || _c === void 0 ? void 0 : _c.value, language: (_d = item.entity) === null || _d === void 0 ? void 0 : _d['xml:lang'] }));
    }
  }
};
GeovEntityPropsByPredicate.style = geovEntityPropsByPredicateCss;

export { GeovEntityPropsByPredicate as geov_entity_props_by_predicate };

//# sourceMappingURL=geov-entity-props-by-predicate.entry.js.map