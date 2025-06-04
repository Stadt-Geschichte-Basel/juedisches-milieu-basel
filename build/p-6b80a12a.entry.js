import{r as m,h as o,H as E,d as A}from"./p-1bafedb0.js";import{i as F}from"./p-27a92608.js";import{i as v}from"./p-fbcdaa2f.js";import{s as w}from"./p-855a8bbd.js";const D=":host{display:block;position:relative}.loading{display:flex;align-items:center;justify-content:center;background-color:var(--ion-color-light-tint, #fafafa)}",c=["#322659","#44337A","#553C9A","#6B46C1","#805AD5","#9F7AEA","#B794F4","#D6BCFA","#E9D8FD","#FAF5FF","#E9D8FD","#D6BCFA","#B794F4","#9F7AEA","#805AD5","#6B46C1","#553C9A","#44337A"],y=()=>`
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT (group_concat(?class;separator=", ") as ?classnames) (Max(?classcount) as ?classcounts)
  WHERE {
      {
          SELECT ?classuri (count(?entity) as ?classcount)
          WHERE {
              ?entity a ?classuri .
          }
          GROUP BY ?classuri
      }
      ?classuri rdfs:label ?class
  }
  GROUP BY ?classuri
  ORDER by DESC(?classcounts)
`,r=class{constructor(t){m(this,t),this.sparqlEndpoint=void 0,this.width=void 0,this.height=void 0,this.loading=void 0}async componentDidLoad(){if(!F()){this.loading=!0;const t=await v();w(this.sparqlEndpoint,y()).then(i=>{var e;const a=(e=i?.results)===null||e===void 0?void 0:e.bindings,d=a.map(s=>s.classnames.value),n=a.map(s=>parseInt(s.classcounts.value)),l=[];for(let s=0;s<n.length;s++)l.push(c[s%c.length]);const h=[{labels:d,values:n,type:"pie",textinfo:"label+percent",textposition:"inside",marker:{colors:l}}],u=n.length,p=Math.round(n.reduce((s,g)=>s+g,0)/1e3),f={width:this.width,height:this.height,title:`Distribution of ${u} classes (${p}k entities)`,showlegend:!1};t&&t.newPlot(this.el,h,f),this.loading=!1})}}render(){return o(E,null,this.loading&&o("div",{style:{width:this.width+"px",height:this.height+"px"},class:"loading"},o("ion-spinner",{name:"dots"})))}get el(){return A(this)}};r.style=D;export{r as geov_class_distri};
