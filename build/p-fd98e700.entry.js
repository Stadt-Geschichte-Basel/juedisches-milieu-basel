import{r as d,h as e,F as m,H as g,e as y}from"./p-1bafedb0.js";import{e as O,p as j,l as F,b as w,f as z,g as B,j as X,k as x,n as q,q as N,r as A,t as M,u as p,v as L,w as $,x as W,y as D,o as G,z as H,A as Y,B as Q,C as J}from"./p-6bc8d60f.js";import{r as I}from"./p-cc441cb7.js";import{s as f}from"./p-855a8bbd.js";import{s as v,g as b,a as u}from"./p-1445007b.js";import{g as K}from"./p-ba8a3ef0.js";const V=class{constructor(t){d(this,t),this.value=void 0}render(){let t=this.value.replace("<http://www.opengis.net/def/crs/EPSG/0/4326>POINT(","");t=t.replace(")","");const n=t.split(" ");return e(m,null,"long: ",n[0],", lat: ",n[1])}},Z=":host{display:block}.wrapper{display:flex}.literal-container{overflow:clip;width:100%}.literal-container ion-button{display:none;margin-left:auto}.label-container{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.color-light{color:var(--ion-color-step-600, black)}.label{width:100%}.open-modal-btn{min-height:0;padding:0;margin:0 0 0 0.25rem;--padding-inline-start:0;--padding-inline-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0}",P=class{constructor(t){d(this,t),this.handleResize=()=>{this.resizePage()},this.modalTitle=void 0,this.label=void 0,this.language=void 0}componentDidLoad(){this.resizePage(),window.addEventListener("resize",this.handleResize)}resizePage(){this.labelContainer&&this.itemButton&&(this.labelContainer.scrollWidth>this.labelContainer.clientWidth?this.itemButton.style.display="block":this.itemButton.style.display="none")}open(){this.modal.present()}dismiss(){this.modal.dismiss()}render(){return e(m,null,e("div",{class:"wrapper"},e("div",{class:"literal-container"},e("div",{ref:t=>this.labelContainer=t},this.label," ",this.language&&e("span",{class:"color-light"},"@",this.language))),e("ion-button",{class:"open-modal-btn",size:"small",fill:"clear",onClick:()=>this.open(),ref:t=>this.itemButton=t},e("ion-icon",{icon:O}))),e("ion-modal",{ref:t=>this.modal=t,onWillDismiss:()=>this.dismiss(),isOpen:!1},e("ion-header",null,e("ion-toolbar",null,e("ion-buttons",{slot:"end"},e("ion-button",{onClick:()=>this.dismiss()},"Close")),e("ion-title",null,this.modalTitle))),e("ion-content",{class:"ion-padding"},this.label)))}};P.style=Z;const tt=":host{display:inline;vertical-align:middle}ion-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}",nt={"https://ontome.net/ontology/c21":j,"https://ontome.net/ontology/c363":F,"https://ontome.net/ontology/c68":w,"https://ontome.net/ontology/c523":z,"https://ontome.net/ontology/c50":B,"http://www.w3.org/2006/time#DateTimeDescription":X,"https://ontome.net/ontology/c785":x,"https://ontome.net/ontology/c63":q,"https://ontome.net/ontology/c61":N,"https://ontome.net/ontology/c633":A,"https://ontome.net/ontology/c442":w,"https://ontome.net/ontology/c629":M,"https://ontome.net/ontology/c697":p,"https://ontome.net/ontology/c698":p,"https://ontome.net/ontology/c213":p,"https://ontome.net/ontology/c444":p,"https://ontome.net/ontology/c636":p,"https://ontome.net/ontology/c637":p,"https://ontome.net/ontology/c5":L,"https://ontome.net/ontology/c535":L,"https://ontome.net/ontology/c933":x,"https://ontome.net/ontology/c84":$,"https://ontome.net/ontology/c868":W},et=D,E=class{constructor(t){d(this,t),this.classURI=void 0}render(){var t;const n=(t=nt[this.classURI])!==null&&t!==void 0?t:et;return e(g,null,n&&e("ion-icon",{icon:n}))}};E.style=tt;const ot=":host{display:block}",R=class{constructor(t){d(this,t),this.modalTitle=void 0,this.fetchBeforeRender=!0,this.entityUri=void 0,this.sparqlEndpoint=void 0,this.totalCount=void 0,this.pageSize=3,this.language=void 0,this.predicateUri=void 0,this.predicateLabel=void 0,this.uriRegex=void 0,this.uriReplace=void 0,this.modalIsOpen=!1}render(){return e(g,null,e("span",{onClick:()=>this.open()},e("slot",null)),e("ion-modal",{ref:t=>this.modal=t},e("ion-header",null,e("ion-toolbar",null,e("ion-buttons",{slot:"start"},e("ion-button",{onClick:()=>this.close()},"Close")),e("ion-title",null,this.modalTitle))),e("ion-content",{ref:t=>this.content=t,class:"ion-padding"},this.modalIsOpen&&e("geov-entity-props-by-predicate",{sparqlEndpoint:this.sparqlEndpoint,entityUri:this.entityUri,totalCount:this.totalCount,language:this.language,predicateUri:this.predicateUri,predicateLabel:this.predicateLabel,fetchBeforeRender:this.fetchBeforeRender}))))}open(){this.modal.present(),this.modalIsOpen=!0}close(){this.modal.dismiss(),this.modalIsOpen=!1}};R.style=ot;const it='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}:host{display:block}ion-list{--ion-item-background:none}ion-item.heading{--padding-start:0;--inner-padding-end:0;--ion-item-background:none}geov-paginator{margin-left:auto}a.propertyLabel,a.propertyLabel:visited{text-decoration:var(--gv-property-link-decoration, none)}a.propertyLabel:hover{color:var(--ion-color-primary-shade, #5e3eaa);text-decoration:underline}a.propertyLabel{color:var(--gv-property-link-color, black);font-size:1.5rem}',rt=(t,n,o,i,r)=>`
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?entity ?entityLabel ?entityType ?entityTypeLabel ?dt
WHERE {
  <${n}> <${t}> ?entity .
  OPTIONAL {?entity rdfs:label ?entityLabel . FILTER(LANG(?entityLabel) IN ("${r}", "en")) .}
  OPTIONAL {?entity rdf:type ?entityType . OPTIONAL {?entityType rdfs:label ?entityTypeLabel . FILTER(LANG(?entityTypeLabel) IN ("${r}", "en")) .}}
  BIND (datatype(?entity) AS ?dt) .
}
LIMIT ${o} OFFSET ${i}
`,T=class{constructor(t){d(this,t),this.pageChanged=y(this,"pageChanged",7),this._ssrId=void 0,this.data=void 0,this.fetchBeforeRender=!0,this.entityUri=void 0,this.sparqlEndpoint=void 0,this.totalCount=void 0,this.pageSize=3,this.language=void 0,this.predicateUri=void 0,this.predicateLabel=void 0,this.uriRegex=void 0,this.uriReplace=void 0,this.color="",this.pageIndex=0,this.entities=void 0,v(this)}async componentWillLoad(){this.fetchBeforeRender&&(this.data=b(this._ssrId)),this.data||(this.data={loading:!0},await this.pageReload().then(t=>(this.data=t,u(this._ssrId,t),t)).catch(t=>(this.data=t,t)))}changePage(t){this.pageIndex=t.detail.pageIndex,this.data={loading:!0},this.pageReload().then(n=>(this.data=n,u(this._ssrId,n),n)).catch(n=>(this.data=n,n))}async pageReload(){const t=rt(this.predicateUri,this.entityUri,this.pageSize,this.pageIndex*this.pageSize,this.language);return f(this.sparqlEndpoint,t).then(n=>{var o;return{entities:(o=n?.results)===null||o===void 0?void 0:o.bindings,loading:!1}}).catch(n=>({error:!0,loading:!1}))}render(){var t,n;const o=this.totalCount>this.pageSize;return e(g,null,e("ion-grid",{fixed:!0},e("ion-item",{class:"heading",color:this.color,lines:"full"},e("a",{class:"propertyLabel",href:this.predicateUri},this.predicateLabel),o&&this.renderPaginator()),e("ion-list",{lines:"full"},(n=(t=this.data)===null||t===void 0?void 0:t.entities)===null||n===void 0?void 0:n.map(i=>this.renderItem(i)))))}renderItem(t){return t.entity.type==="uri"?this.renderUri(t):e("ion-item",null,e("ion-label",null,this.renderLiteral(t)))}renderUri(t){var n;switch((n=t.entityType)===null||n===void 0?void 0:n.value){case void 0:return this.renderExternalUri(t);default:return this.renderGenericEntity(t)}}renderExternalUri(t){var n,o,i;const r=this.uriRegex,a=this.uriReplace,s=I(t.entity.value,r,a),l=s.includes("geovistory.org"),c=l?"":"_blank",h=l?void 0:G;return e("ion-item",{color:this.color,href:s,target:c,detailIcon:h},!((n=t.entityLabel)===null||n===void 0)&&n.value?e("p",null,(o=t.entityLabel)===null||o===void 0?void 0:o.value):e("p",null,(i=t.entity)===null||i===void 0?void 0:i.value))}renderGenericEntity(t){return e("ion-item",null,e("geov-list-item-nested-properties",{sparqlEndpoint:this.sparqlEndpoint,entityUri:t.entity.value,language:"en",fetchBeforeRender:this.fetchBeforeRender,parent:{subjectUri:this.entityUri,predicateUri:this.predicateUri},uriRegex:this.uriRegex,uriReplace:this.uriReplace}))}renderPaginator(){return e("geov-paginator",{color:this.color,length:this.totalCount,pageSize:this.pageSize,pageIndex:this.pageIndex,onPageChanged:t=>this.changePage(t),showFirstLastButtons:!1})}renderLiteral(t){var n,o,i,r;switch((n=t.dt)===null||n===void 0?void 0:n.value){case"http://www.opengis.net/ont/geosparql#wktLiteral":return e("geov-display-geosparql-wktliteral",{color:this.color,value:(o=t.entity)===null||o===void 0?void 0:o.value});case"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":case"http://www.w3.org/2001/XMLSchema#string":default:return e("geov-display-string-literal",{color:this.color,modalTitle:this.predicateLabel,label:(i=t.entity)===null||i===void 0?void 0:i.value,language:(r=t.entity)===null||r===void 0?void 0:r["xml:lang"]})}}};T.style=it;const at=`:host {
  display: block;
  width: 100%;
}

geov-display-string-literal {
  --border-top: none;
  --padding-start: 0;
  --min-height: 0;
  --inner-padding-end: 0;
}

geov-time-span {
  display: inline;
  padding-left: 1rem;
  color: var(--ion-color-step-600);
}

ion-item {
  --padding-start: 0;
}

.containerForQuery {
  container-type: inline-size;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.header {
  padding: 1rem 16px 0.5rem 0;
  flex-basis: 200px;
  flex-grow: 1;
  flex-shrink: 0;
  border-bottom: dashed 1px var(--border-color);
  border-right: dashed 1px var(--ion-color-tertiary);
}

.content ion-col {
  flex-basis: 300px;
}

.content {
  padding: 0.5rem 0 0.5rem 16px;
  flex-basis: 300px;
  flex-grow: 1;
  flex-shrink: 0;
}

.header .classLabelContainer {
  color: var(--gv-class-link-color, #000);
}

.header a.classLabel {
  color: var(--gv-class-link-color, #000);
  text-decoration: var(--gv-class-link-decoration);
}

.header a.classLabel:hover {
  text-decoration: underline;
}

.nestedProp .propLabelWrapper a.propLabel {
  color: var(--gv-property-link-color, #000);
  text-decoration: var(--gv-property-link-decoration);
}

.nestedProp .propLabelWrapper a.propLabel:hover {
  text-decoration: underline;
}

ion-col {
  padding: 0;
  margin: 0;
}

a.entityLink {
  color: var(--gv-entity-link-color, #000);
  text-decoration: var(--gv-entity-link-decoration);
}

a.entityLink:hover {
  text-decoration: underline;
}

.timespanLabel geov-time-span {
  padding: 0;
}

.pointer {
  cursor: pointer;
}

@container (width > 532px) {
  .container {
    flex-wrap: nowrap;
  }

  .header {
    flex-grow: 0;
    border-right: dashed 1px var(--border-color);
    border-bottom: none;
  }

  .content ion-col {
    flex-basis: 0px;
  }
}
`,st=(t,n)=>` PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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
          <${t}> ?predicate ?o.
        }
        GROUP BY ?predicate
      }.

      # Left join predicate labels
      OPTIONAL {
        ?predicate rdfs:label ?pLabel . FILTER(LANG(?pLabel) IN ("${n}", "en")) .
      }.

      # Left join add object labels
      OPTIONAL {
        ?object rdfs:label ?oLabel
      }.
  }

  GROUP BY ?predicate ?count ?object
  # limit to max 50 predicate groups
  LIMIT 50`,k=class{constructor(t){d(this,t),this._ssrId=void 0,this.data=void 0,this.fetchBeforeRender=!0,this.sparqlEndpoint=void 0,this.entityUri=void 0,this.language="en",this.predicateInclude=void 0,this.predicateExclude=void 0,this.uriRegex=void 0,this.uriReplace=void 0,this.color="",this.parent=void 0,v(this)}async componentWillLoad(){this.fetchBeforeRender&&(this.data=b(this._ssrId)),this.data||(this.data={loading:!0},await this.fetchData().then(t=>{var n;return t.nestedProps=(n=t.nestedProps)!==null&&n!==void 0?n:[],this.data=t,u(this._ssrId,t),t}).catch(t=>(this.data=t,t)))}render(){var t,n;const{rdfTypeProp:o,rdfsLabelProp:i,restProps:r}=this.splitProps(this.data.nestedProps);return e(g,null,e("div",{class:"containerForQuery"},e("div",{class:"container"},e("div",{class:"header"},e("div",{class:"classLabelContainer"},e("geov-entity-class-icon",{classURI:o.object.value}),e("a",{href:o.object.value,target:"_blank",class:"classLabel"},(t=o?.objectLabel)===null||t===void 0?void 0:t.value)," ",e("div",{class:"timespanLabel"},e("geov-time-span",{sparqlEndpoint:this.sparqlEndpoint,entityUri:K(this.entityUri)}))),e("div",{class:"entityLabelContainer"},e("a",{href:this.prepareUrl(this.entityUri),target:"_blank",class:"entityLink"},(n=i?.object)===null||n===void 0?void 0:n.value))),e("div",{class:"content"},e("ion-row",null,r.map(a=>{var s;return e("ion-col",null,e("ion-item",{lines:"none",class:"nestedProp"},e("ion-label",null,e("p",{class:"propLabelWrapper"},this.renderPredicateLabel(a.predicateLabel,a.predicate)),this.countBiggerThanOne(a.count)?e("p",null,this.renderModal(a,(s=o?.objectLabel)===null||s===void 0?void 0:s.value)):e("h3",null,this.renderObject(a.object,a.objectLabel,this.getPredicateLabel(a.predicateLabel,a.predicate))))))}))))),e("slot",null))}splitProps(t){let n,o;const i=[];for(const r of t)r.predicate.value==="http://www.w3.org/1999/02/22-rdf-syntax-ns#type"?o=r:r.predicate.value==="http://www.w3.org/2000/01/rdf-schema#label"?n=r:this.isInverseOfParent(r)||i.push(r);return i.sort((r,a)=>{var s,l,c,h;const C=(l=(s=r?.predicateLabel)===null||s===void 0?void 0:s.value)!==null&&l!==void 0?l:"",_=(h=(c=a?.predicateLabel)===null||c===void 0?void 0:c.value)!==null&&h!==void 0?h:"";return C.localeCompare(_)}),{rdfTypeProp:o,rdfsLabelProp:n,restProps:i}}isInverseOfParent(t){var n,o,i;if(!(!((n=this.parent)===null||n===void 0)&&n.predicateUri)||!(!((o=this.parent)===null||o===void 0)&&o.subjectUri)||parseInt((i=t.count)===null||i===void 0?void 0:i.value)>1)return!1;const r=t.predicate.value,a=this.parent.predicateUri,s=()=>{const l=r.replace(a,""),c=a.replace(r,"");return l==="i"||c=="i"};return!!(t.object.value===this.parent.subjectUri&&s())}async fetchData(){let t={loading:!0};const n=st(this.entityUri,this.language);return await f(this.sparqlEndpoint,n).then(o=>{var i;t={loading:!1,nestedProps:(i=o?.results)===null||i===void 0?void 0:i.bindings}}).catch(o=>{t={loading:!1,error:!0}}),t}renderPredicateLabel(t,n){return e("a",{class:"propLabel",href:n.value,target:"_blank"},this.getPredicateLabel(t,n))}getPredicateLabel(t,n){var o;return(o=t?.value)!==null&&o!==void 0?o:n.value.replace("http://www.w3.org/2000/01/rdf-schema#","rdfs:").replace("http://www.w3.org/1999/02/22-rdf-syntax-ns#","rdf:")}renderModal(t,n){var o,i;return e("geov-entity-predicate-modal",{modalTitle:n,sparqlEndpoint:this.sparqlEndpoint,entityUri:this.entityUri,totalCount:parseInt((o=t.count)===null||o===void 0?void 0:o.value),language:this.language,predicateUri:t.predicate.value,predicateLabel:t.predicateLabel.value,fetchBeforeRender:!1},e("span",{class:"pointer"}," ",(i=t.count)===null||i===void 0?void 0:i.value," items..."))}countBiggerThanOne(t){return parseInt(t?.value)>1}renderObject(t,n,o){var i;if(t?.type==="uri")return e("a",{href:this.prepareUrl(t?.value),target:"_blank",class:"entityLink"},(i=n?.value)!==null&&i!==void 0?i:t?.value);switch(t?.datatype){case"http://www.opengis.net/ont/geosparql#wktLiteral":return e("geov-display-geosparql-wktliteral",{color:this.color,value:t?.value});case"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":case"http://www.w3.org/2001/XMLSchema#string":default:return e("geov-display-string-literal",{color:this.color,modalTitle:o,label:t?.value,language:t?.["xml:lang"]})}}prepareUrl(t){return I(t,this.uriRegex,this.uriReplace)}};k.style=at;const lt=":host{display:flex;align-items:center;flex-direction:row;flex-wrap:wrap}ion-item{--inner-padding-end:var(--inner-padding-end)}",U=class{constructor(t){d(this,t),this.pageChanged=y(this,"pageChanged",7),this.hidePageSize=void 0,this.length=0,this.pageIndex=0,this.pageSize=25,this.showFirstLastButtons=!0,this.color=void 0}render(){const t=Math.floor((this.length-1)/this.pageSize)+1,n=this.pageIndex<=0,o=this.pageIndex+1>=t,i=this.pageIndex*this.pageSize+1,r=this.pageIndex*this.pageSize+this.pageSize;return e(g,null,e("ion-item",{color:this.color,lines:"none"},!this.hidePageSize&&e("ion-note",null,i," \u2013\xA0",r<=this.length?r:this.length," of ",this.length),e("ion-buttons",null,this.showFirstLastButtons&&e("ion-button",{disabled:n,onClick:()=>this.changePageTo(0)},e("ion-icon",{slot:"icon-only",icon:H})),e("ion-button",{disabled:n,onClick:()=>this.changePageTo(this.pageIndex-1)},e("ion-icon",{slot:"icon-only",icon:Y})),e("ion-button",{disabled:o,onClick:()=>this.changePageTo(this.pageIndex+1)},e("ion-icon",{slot:"icon-only",icon:Q})),this.showFirstLastButtons&&e("ion-button",{disabled:o,onClick:()=>this.changePageTo(t-1)},e("ion-icon",{slot:"icon-only",icon:J})))))}changePageTo(t){const n=this.pageIndex;this.pageIndex=t,this.pageChanged.emit({length:this.length,pageIndex:this.pageIndex,pageSize:this.pageSize,previousPageIndex:n})}};U.style=lt;const dt=":host{display:block}",ct=t=>`
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
          <${t}> ?predicate ?o.
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
  LIMIT 50`,S=class{constructor(t){d(this,t),this._ssrId=void 0,this.data=void 0,this.fetchBeforeRender=!0,this.sparqlEndpoint=void 0,this.entityUri=void 0,v(this)}async componentWillLoad(){this.fetchBeforeRender&&(this.data=b(this._ssrId)),this.data||(this.data={loading:!0},await this.fetchData().then(t=>(this.data=t,u(this._ssrId,t),t)).catch(t=>(this.data=t,t)))}async fetchData(){let t={loading:!0};const n=ct(this.entityUri);return await f(this.sparqlEndpoint,n).then(o=>{var i;t={loading:!1,rows:(i=o?.results)===null||i===void 0?void 0:i.bindings}}).catch(o=>{t={loading:!1,error:!0}}),t}rowsToString(t){const n=t.map(r=>this.getTime(r)).filter(r=>!!r.timeUnit).sort((r,a)=>r.year!==a.year?r.year-a.year:r.month!==a.month?r.month-a.month:r.day-a.day);if(n.length===0)return;const o=n[0],i=n[n.length-1];return o===i?this.timeInfoToString(o):`${this.timeInfoToString(o)} \u2013 ${this.timeInfoToString(i)}`}getTime(t){var n,o,i,r,a,s;return{year:parseInt((n=t.year)===null||n===void 0?void 0:n.value),month:parseInt((i=(o=t.month)===null||o===void 0?void 0:o.value)===null||i===void 0?void 0:i.replace("--","")),day:parseInt((a=(r=t.day)===null||r===void 0?void 0:r.value)===null||a===void 0?void 0:a.replace("---","")),timeUnit:(s=t.timeUnit)===null||s===void 0?void 0:s.value}}timeInfoToString(t){switch(t.timeUnit){case"http://www.w3.org/2006/time#unitYear":return`${t.year}`;case"http://www.w3.org/2006/time#unitMonth":return`${t.year}-${t.month.toString().padStart(2,"0")}`;case"http://www.w3.org/2006/time#unitDay":default:return`${t.year}-${t.month.toString().padStart(2,"0")}-${t.day.toString().padStart(2,"0")}`}}render(){return e(m,null,this.rowsToString(this.data.rows))}};S.style=dt;export{V as geov_display_geosparql_wktliteral,P as geov_display_string_literal,E as geov_entity_class_icon,R as geov_entity_predicate_modal,T as geov_entity_props_by_predicate,k as geov_list_item_nested_properties,U as geov_paginator,S as geov_time_span};
