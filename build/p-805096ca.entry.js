import{r as d,h as a,H as l}from"./p-1bafedb0.js";import{s as r}from"./p-855a8bbd.js";import{s as h,g as c,a as u}from"./p-1445007b.js";const f=":host{display:block}",g=t=>`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?o
WHERE {
  geov:${t} rdfs:label ?o .
}
LIMIT 1
`,o=class{constructor(t){d(this,t),this.buttonClick=s=>{this.msg="clicked"+s.offsetX},this._ssrId=void 0,this.sparqlEndpoint=void 0,this.entityId=void 0,this.data=void 0,this.msg=void 0,h(this)}async componentWillLoad(){this.data=c(this._ssrId),this.data||(this.data={loading:!0},await this.fetchData().then(t=>(this.data=t,u(this._ssrId,t),t)).catch(t=>(this.data=t,t)),this.msg="component data was fetched by component")}async fetchData(){return r(this.sparqlEndpoint,g(this.entityId)).then(t=>{var s,i,n,e;return Object.assign(Object.assign({},this.data),{label:((e=(n=(i=(s=t?.results)===null||s===void 0?void 0:s.bindings)===null||i===void 0?void 0:i[0])===null||n===void 0?void 0:n.o)===null||e===void 0?void 0:e.value)+" fetched at: "+new Date().toTimeString(),loading:!1})}).catch(t=>Object.assign(Object.assign({},this.data),{error:!0,loading:!1}))}render(){return a(l,null,a("div",null,this.msg),this.data.label,this.data.loading?"loading...":"",this.data.error?"error!":"",!this.data.label&&!this.data.loading&&!this.data.error?a("span",{class:"no-label-found"},"no label found"):"",a("button",{onClick:this.buttonClick},"click me!"),a("slot",null))}};o.style=f;export{o as geov_data_fetch_example};
