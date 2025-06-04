import{r as f,h as s,H as m,d as E}from"./p-1bafedb0.js";import{i as w}from"./p-27a92608.js";import{i as F}from"./p-fbcdaa2f.js";import{s as A}from"./p-855a8bbd.js";const v=":host{display:block}.loading{display:flex;align-items:center;justify-content:center;background-color:var(--ion-color-light-tint, #fafafa)}",a=["#322659","#44337A","#553C9A","#6B46C1","#805AD5","#9F7AEA","#B794F4","#D6BCFA","#E9D8FD","#FAF5FF","#E9D8FD","#D6BCFA","#B794F4","#9F7AEA","#805AD5","#6B46C1","#553C9A","#44337A"],D=()=>`
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT (group_concat(?propertyname;separator=", ") as ?propertynames) (Max(?propertycount) as ?propertycounts)
    WHERE {
    {
        SELECT  ?property (count(?entityUri) as ?propertycount)
        WHERE {
            ?entityUri ?property ?object .
            ?property1 <http://www.w3.org/2002/07/owl#inverseOf> ?property .
        }
        GROUP BY ?property
    }
    ?property rdfs:label ?propertyname
    FILTER (lang(?propertyname) = 'en')
    }
    GROUP BY ?property
    ORDER by DESC(?propertycounts)
`,l=class{constructor(e){f(this,e),this.sparqlEndpoint=void 0,this.width=void 0,this.height=void 0,this.loading=void 0}async componentWillLoad(){if(!w()){this.loading=!0;const e=await F();A(this.sparqlEndpoint,D()).then(o=>{var r;const i=(r=o?.results)===null||r===void 0?void 0:r.bindings,d=i.map(t=>t.propertynames.value),n=i.map(t=>parseInt(t.propertycounts.value)),p=[];for(let t=0;t<n.length;t++)p.push(a[t%a.length]);const h=[{labels:d,values:n,type:"pie",textinfo:"label+percent",textposition:"inside",marker:{colors:p}}],c=n.length,u=Math.round(n.reduce((t,g)=>t+g,0)/1e3),y={width:this.width,height:this.height,title:`Distribution of ${c} properties (${u}k statements)`,showlegend:!1};e.newPlot(this.el,h,y),this.loading=!1})}}render(){return s(m,null,this.loading&&s("div",{style:{width:this.width+"px",height:this.height+"px"},class:"loading"},s("ion-spinner",{name:"dots"})))}get el(){return E(this)}};l.style=v;export{l as geov_property_distri};
