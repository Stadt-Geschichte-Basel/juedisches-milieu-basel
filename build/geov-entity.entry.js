import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { g as getTimeSpanUri } from './getTimeSpanUri-fb206253.js';
import { r as regexReplace } from './regexReplace-9416bef5.js';

const geovEntityCss = ":host{display:block}.container{background:var(--ion-color-tertiary);color:var(--ion-color-tertiary-contrast)}.header{padding:var(--ion-padding);padding-top:2.5rem;background:var(--ion-color-tertiary-shade)}.header h1{margin-top:0}.header geov-entity-class-label,.header geov-entity-definition{overflow:hidden;text-overflow:ellipsis}.metadata{padding:0.5rem 0 0.5rem 0;font-size:.875rem;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.metadata a{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);text-decoration:var(--gv-entity-link-decoration)}.metadata a:hover{text-decoration:underline}.section{display:block;color:var(--ion-color-tertiary-contrast);padding:24px 0}.section:nth-child(even){background:var(--ion-color-tertiary-shade)}.section:nth-child(odd){background:var(--ion-color-tertiary)}.columns-1{--column-count:1;--column-gap:0px}.columns-2{--column-count:1;--column-gap:0px}.columns-3{--column-count:1;--column-gap:0px}@media screen and (min-width: 992px){.columns-3,.columns-2{--column-count:2}}@media screen and (min-width: 1200px){.columns-3{--column-count:3}}.supertitle geov-entity-class-label{font-size:1.7rem;margin-block-start:0.9em;margin-block-end:0.9em;line-height:1.8}a.entityLink{color:var(--gv-entity-link-color, #000);text-decoration:var(--gv-entity-link-decoration)}a.entityLink:hover{text-decoration:underline}geov-entity geov-entity-properties{display:block;padding-top:3rem}";

const GeovEntity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.predicatesBasic = ['http://www.w3.org/2000/01/rdf-schema#label', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'];
    this.predicatesTime = ['https://ontome.net/ontology/p4'];
    this.excluded = ['https://ontome.net/ontology/p1943', 'https://ontome.net/ontology/p1762'];
    this.sparqlEndpoint = undefined;
    this.entityId = undefined;
    this.projectId = undefined;
    this.language = 'en';
    this.fetchBeforeRender = true;
    this.uriRegex = undefined;
    this.uriReplace = undefined;
    this.ssrIdPrefix = '';
  }
  render() {
    const pageLink = this.getPageLink();
    const uri = this.getURI();
    return (h(Host, null, h("div", { class: "container" }, h("div", { class: "header" }, h("ion-grid", { fixed: true }, h("div", { class: "supertitle" }, h("geov-entity-class-label", { entityId: this.entityId, sparqlEndpoint: this.sparqlEndpoint, _ssrId: `${this.ssrIdPrefix}class-label`, withIcon: true }), h("geov-time-span", { entityUri: getTimeSpanUri('http://geovistory.org/resource/' + this.entityId), sparqlEndpoint: this.sparqlEndpoint })), h("h1", { class: "unrestricted-width" }, h("geov-entity-label", { entityId: this.entityId, sparqlEndpoint: this.sparqlEndpoint, _ssrId: `${this.ssrIdPrefix}entity-label` })), h("div", null, h("geov-entity-definition", { entityId: this.entityId, sparqlEndpoint: this.sparqlEndpoint, _ssrId: `${this.ssrIdPrefix}definition` })), h("div", { class: "metadata" }, h("div", null, "URI:", ' ', h("a", { href: uri, target: "_blank" }, uri)), this.projectId && (h("div", null, "Link:", ' ', h("a", { href: pageLink, target: "_blank" }, pageLink)))))), h("slot", { name: "body-start" }), h("geov-entity-properties", { onDataFetched: this.removeIfEmpty(), predicateExclude: [...this.predicatesBasic, ...this.excluded].join(','), fixedGrid: false, class: "columns-1", sparqlEndpoint: this.sparqlEndpoint, entityUri: 'http://geovistory.org/resource/' + this.entityId, language: 'en', fetchBeforeRender: this.fetchBeforeRender, uriRegex: this.uriRegex, uriReplace: this.uriReplace }), h("div", { class: "section columns-1 ion-text-center" }, h("geov-entity-download-rdf", { entityId: this.entityId, projectId: this.projectId, color: "primary", fill: "outline", buttonLabel: "Download RDF" })), h("slot", { name: "body-end" }))));
  }
  /**
   * Generates the URL of this page by applying the given regex.
   *
   * @returns the url to this page
   */
  getPageLink() {
    return regexReplace('http://geovistory.org/resource/' + this.entityId, this.uriRegex, this.uriReplace);
  }
  /**
   * Generates the URI of this resource. This depends on the regex, which allows to override
   * the real uri to make working links in local, dev or staging environments.
   * In contrast to getURL it omits the 'p' query parameter.
   *
   * @returns the url to this page
   */
  getURI() {
    return this.getPageLink().replace('?p=' + this.projectId, '');
  }
  /**
   * removes the element from dom, if the fetched data is empty
   * @returns
   */
  removeIfEmpty() {
    return event => {
      if (event.detail.propsWithCount.length === 0) {
        event.target.remove();
      }
    };
  }
};
GeovEntity.style = geovEntityCss;

export { GeovEntity as geov_entity };

//# sourceMappingURL=geov-entity.entry.js.map