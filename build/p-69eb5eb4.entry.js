import{r as g,h as l,H as v}from"./p-1bafedb0.js";import{g as p,a as C,s as y}from"./p-1445007b.js";import{s as d}from"./p-855a8bbd.js";const u=t=>t.trim().replace("*"," ").split(" ").map(e=>"*"+e+"*").join(" AND "),m=t=>`# classes
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX text: <http://jena.apache.org/text#>

SELECT ?class ?label ?count
WHERE {
  {
    SELECT  ?class (count(distinct ?entityUri) as ?count)
    WHERE {
      ${t?`(?entityUri) text:query ('${u(t)}') . `:""}
 	   ?entityUri a ?class .
    }
    GROUP BY ?class
    ORDER by DESC(?count)
  }
  ?class rdfs:label ?label
}
HAVING(?label != "")
`;class E{async fetch(e,o){return this.promiseWithCancel=d(e,m(o)),this.promiseWithCancel.then(c=>{var a,i;return{items:(i=(a=c?.results)===null||a===void 0?void 0:a.bindings)===null||i===void 0?void 0:i.map(n=>({classLabel:n.label.value,classUri:n.class.value,instanceCount:Number(n.count.value)})),loading:!1}}).catch(c=>({error:!0,loading:!1}))}}const S=(t,e,o,c)=>`# entities
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
                        ${t?`(?entityUri) text:query ('${u(t)}') . `:""}

                        ${e?.length?"":`
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
                        `}

                        ${e.map(a=>`{?entityUri a <${a}> .}`).join(`
UNION
`)}
                        OPTIONAL {?entityUri rdfs:label ?entityLabel .}

                  }
                  LIMIT ${o}
                  OFFSET ${c}
              }
              ?entityUri a ?classUri .
          }
        }
        OPTIONAL { ?classUri rdfs:label ?classLabel .}
      }
      HAVING (?classLabel!="")
    }
  }
`;class L{async fetch(e,o,c,a,i){return this.promiseWithCancel=d(e,S(o,c,a,i)),this.promiseWithCancel.then(s=>{var n,r;return{items:(r=(n=s?.results)===null||n===void 0?void 0:n.bindings)===null||r===void 0?void 0:r.map(h=>({classLabel:h.classLabel.value,entityLabel:h.entityLabel.value,entityUri:h.entityUri.value,classUri:h.classUri.value})),loading:!1}}).catch(s=>({error:!0,loading:!1}))}}const U=(t,e)=>`# count
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX text: <http://jena.apache.org/text#>

SELECT (count(distinct ?entityUri) as ?count)
WHERE {
  ${t?`(?entityUri) text:query ('${u(t)}') . `:""}

  ${e?.length?`${e.map(o=>`{?entityUri a <${o}> .}`).join(`
UNION
`)}`:`
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
          `}
}
`;class I{async fetch(e,o,c){return this.promiseWithCancel=d(e,U(o,c)),this.promiseWithCancel.then(a=>{var i,s,n;return{count:Number((n=(s=(i=a?.results)===null||i===void 0?void 0:i.bindings)===null||s===void 0?void 0:s[0])===null||n===void 0?void 0:n.count.value),loading:!1}}).catch(a=>({error:!0,loading:!1}))}}const b=":host{display:block}.entity-count-col{align-items:center;display:flex;flex-direction:row}.entity-count-label{height:1rem;padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}.entity-count-sm{margin-top:2px;margin-bottom:1rem;display:block}ion-searchbar{padding-bottom:0}.paginator-container{margin-top:1rem;align-items:center}.paginator{margin-left:auto}",f=class{set data(t){this.entityList=t?.entityList,this.classSelect=t?.classSelect,this.fullCount=t?.fullCount,this.__data=t}get data(){return this.__data}set offset(t){this._offset=t,this.fetchEntityListData()}get offset(){return this._offset}set searchString(t){this._searchString=t,this.offset=0,this.fetchClassSelectData(),this.fetchEntityListData(),this.fetchFullCountData()}get searchString(){return this._searchString}set selectedClass(t){var e;((e=this._selectedClass)===null||e===void 0?void 0:e.classUri)!==t?.classUri&&(this._selectedClass=t,this._offset=0,this.fetchEntityListData(),this.fetchFullCountData())}get selectedClass(){return this._selectedClass}componentWillLoad(){if(this._searchString=this.initSearchString,this.data=p(this._ssrId),!this.data){const t=this.fetchData().then(e=>(this.data=e,C(this._ssrId,e),e)).catch(e=>(this.data=e,e));if(this.fetchBeforeRender)return t}}constructor(t){g(this,t),this.limit=10,this._ssrId=void 0,this.sparqlEndpoint=void 0,this.fetchBeforeRender=!1,this.initSearchString=void 0,this.uriRegex=void 0,this.uriReplace=void 0,this.preferredItems=void 0,this.classUriPrefix=void 0,this.entityList=void 0,this.classSelect=void 0,this.fullCount=void 0,this._offset=0,y(this)}async fetchData(){return Promise.all([await this.fetchClassSelectData(),this.fetchEntityListData(),this.fetchFullCountData()]).then(([t,e,o])=>({classSelect:t,entityList:e,fullCount:o,loading:!1}))}async fetchClassSelectData(){return this.classSelect={loading:!0},this.fetchClassSelect&&this.fetchClassSelect.promiseWithCancel.cancel(),this.fetchClassSelect=new E,this.classSelect=await this.fetchClassSelect.fetch(this.sparqlEndpoint,this.searchString),this.fetchClassSelect=void 0,this.classSelect}async fetchEntityListData(){return this.entityList={loading:!0},this.fetchEntityList&&this.fetchEntityList.promiseWithCancel.cancel(),this.fetchEntityList=new L,this.entityList=await this.fetchEntityList.fetch(this.sparqlEndpoint,this.searchString,this.selectedClass?[this.selectedClass.classUri]:[],this.limit,this.offset),this.fetchEntityList=void 0,this.entityList}async fetchFullCountData(){return this.fullCount={loading:!0},this.fetchFullCount&&this.fetchFullCount.promiseWithCancel.cancel(),this.fetchFullCount=new I,this.fullCount=await this.fetchFullCount.fetch(this.sparqlEndpoint,this.searchString,this.selectedClass?[this.selectedClass.classUri]:[]),this.fetchFullCount=void 0,this.fullCount}render(){var t,e,o,c,a;return l(v,null,l("ion-grid",null,l("ion-row",null,l("ion-col",{sizeMd:"0",sizeLg:"6",sizeXl:"3",class:"entity-count-col ion-hide-lg-down"}),l("ion-col",{sizeMd:"12",sizeLg:"6",sizeXl:"9"},l("ion-searchbar",{value:this.searchString,debounce:300,onIonChange:i=>{this.searchString=i.detail.value}}),l("geov-class-select-popup",{class:"ion-hide-lg-up",onSelectionChanged:i=>{this.selectedClass=i.detail.value},ref:i=>{var s;i.initValue=this.selectedClass,i.items=(s=this.classSelect)===null||s===void 0?void 0:s.items}}),l("ion-note",{class:"entity-count-sm entity-count-label"},!((t=this.fullCount)===null||t===void 0)&&t.loading?l("ion-skeleton-text",{animated:!0,style:{width:"40px"}}):l("span",null,(e=this.fullCount)===null||e===void 0?void 0:e.count," Entities")," "))),l("ion-row",null,l("ion-col",{sizeMd:"0",sizeLg:"6",sizeXl:"3",class:"ion-hide-lg-down"},l("geov-class-radio-group",{onSelectionChanged:i=>{this.selectedClass=i.detail.value},ref:i=>{var s,n;i.initValue=this.selectedClass,i.preferredItems=this.preferredItems,this.classUriPrefix&&(i.uriPrefix=this.classUriPrefix),i.items=(s=this.classSelect)===null||s===void 0?void 0:s.items,i.loading=(n=this.classSelect)===null||n===void 0?void 0:n.loading}})),l("ion-col",{sizeMd:"12",sizeLg:"6",sizeXl:"9"},l("geov-entity-list",{defaultPageSize:this.limit,uriRegex:this.uriRegex,uriReplace:this.uriReplace,ref:i=>{var s,n;i.items=(s=this.entityList)===null||s===void 0?void 0:s.items,i.loading=(n=this.entityList)===null||n===void 0?void 0:n.loading}}),l("ion-item",{class:"paginator-container",lines:"none"},((o=this.fullCount)===null||o===void 0?void 0:o.count)&&!(!((c=this.fullCount)===null||c===void 0)&&c.loading)&&l("geov-paginator",{class:"paginator",onPageChanged:i=>{console.log("onPageChanged"),this.offset=i.detail.pageSize*i.detail.pageIndex},pageSize:this.limit,length:(a=this.fullCount)===null||a===void 0?void 0:a.count}))))),l("slot",null))}};f.style=b;export{f as geov_explorer};
