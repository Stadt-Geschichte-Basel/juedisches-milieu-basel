import{r as y,e as f,h as e,H as m}from"./p-1bafedb0.js";import{s as d}from"./p-855a8bbd.js";const w="German authority file (GND)",v="https://lobid.org/gnd/search?q=",b="&size=",g="&format=json:preferredName",k="&filter=type:Person",D="&filter=type:PlaceOrGeographicName",x="&filter=type:CorporateBody",O="Wikidata",C="https://query.wikidata.org/sparql",a=(t,i,n)=>`SELECT DISTINCT * WHERE {
  SERVICE wikibase:mwapi {
      bd:serviceParam wikibase:endpoint "www.wikidata.org";
                      wikibase:api "EntitySearch";
                      mwapi:search "${t}";
                      mwapi:language "en".
      ?item wikibase:apiOutputItem mwapi:item.
      ?num wikibase:apiOrdinal true.
  }
  ?item rdfs:label ?name filter (lang(?name) = "en").
  ${i}
} ORDER BY ASC(?num) LIMIT ${n}`,P="?item wdt:P31 wd:Q5.",I="?item wdt:P31/wdt:P279* wd:Q82794.",E="?item wdt:P31/wdt:P279* wd:Q43229.",M="IdRef",l="https://www.idref.fr/Sru/Solr?q=",S="https://www.idref.fr/",r="&start=0&rows=",c="&indent=on&sort=score%20desc&fl=id,ppn_z,affcourt_z&version=2.2&wt=json",_="all:",R="persname_t:",B="geogname_t:",G="corpname_t:",A="Geovistory",N="https://sparql.geovistory.org/api_v1_community_data",p=(t,i,n)=>`
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX text: <http://jena.apache.org/text#>
PREFIX ontome: <https://ontome.net/ontology/>

SELECT DISTINCT ?item ?name ?classUri
WHERE
{
  	(?item) text:query ('${t}') .
  	?item rdfs:label ?name .
  	?item a ?classUri${i} .
}
LIMIT ${n}
OFFSET 0`,T=", ontome:c21",L=", ontome:c363",H=", ontome:c68",j=`:host {
  display: block;
}

.colContent {
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /*Add suspension points (...) to indicate cut content */
  white-space: nowrap; /* Prevents content from going to line */
}

.containerResponsive {
  container-type: inline-size;
}

.colButtons {
  display: none;
  text-align: right;
  white-space: nowrap;
}
.colMenu {
  text-align: right;
}

@container (width >= 320px) {
  .colButtons {
    display: block;
  }

  .colMenu {
    display: none;
  }
}
`,u=class{constructor(t){y(this,t),this.selected=f(this,"selected",3),this.apiAllowedValues=["gnd","wikidata","idref","geovistory"],this.api=void 0,this.keywords=void 0,this.type=void 0,this.nbOccurencesMax=5,this.displaySelectBtn=!0,this.displayOpenBtn=!0,this.displayCopyBtn=!1,this.uriData=void 0,this.title=void 0,this.popoverElement=void 0,this.isPopoverOpen=!1,this.popoverItem=void 0,this.isLoadingData=!1}validateApiValue(t,i){this.apiAllowedValues.includes(t)||(console.error('Invalid value for prop "api". It must be one of the allowed values.'),this.api=i)}keywordsHandler(t){this.keywords=t,this.executeAllQueries()}typeHandler(t){this.type=t,this.executeAllQueries()}async getDataGND(){if(this.title=w,this.uriData=[],this.keywords.trim()!=""){let t=v+this.keywords+b+this.nbOccurencesMax+g;this.type!==null&&this.type==="Person"&&(t=t+k),this.type!==null&&this.type==="Place"&&(t=t+D),this.type!==null&&this.type==="Group"&&(t=t+x);const n=await(await fetch(t)).json();this.uriData=n.map(s=>({uri:s.id,label:s.label}))}}async getDataWikiData(){var t;if(this.title=O,this.uriData=[],this.keywords.trim()!=""){let i=a(this.keywords,"",this.nbOccurencesMax);this.type!==null&&this.type==="Person"&&(i=a(this.keywords,P,this.nbOccurencesMax)),this.type!==null&&this.type==="Place"&&(i=a(this.keywords,I,this.nbOccurencesMax)),this.type!==null&&this.type==="Group"&&(i=a(this.keywords,E,this.nbOccurencesMax));const n=await d(C,i);this.uriData=(t=n?.results)===null||t===void 0?void 0:t.bindings.map(s=>({uri:s.item.value,label:s.name.value}))}}async getDataIdRef(){var t;if(this.title=M,this.uriData=[],this.keywords.trim()!=""){const i=this.keywords.trim().split(" ").join(" AND ");let n=l+_+"("+i+")"+r+this.nbOccurencesMax+c;this.type!==null&&this.type==="Person"&&(n=l+R+"("+i+")"+r+this.nbOccurencesMax+c),this.type!==null&&this.type==="Place"&&(n=l+B+"("+i+")"+r+this.nbOccurencesMax+c),this.type!==null&&this.type==="Group"&&(n=l+G+"("+i+")"+r+this.nbOccurencesMax+c);const o=await(await fetch(n)).json();this.uriData=(t=o.response.docs)===null||t===void 0?void 0:t.map(h=>({uri:S+h.ppn_z,label:h.affcourt_z}))}}async getGeovistoryData(){var t;this.title=A,this.uriData=[];const i=this.keywords.trim().split(" ").map(n=>`*${n}*`).join(" AND ");if(i.trim()!=""){let n=p(i,"",this.nbOccurencesMax);this.type!==null&&this.type==="Person"&&(n=p(i,T,this.nbOccurencesMax)),this.type!==null&&this.type==="Place"&&(n=p(i,L,this.nbOccurencesMax)),this.type!==null&&this.type==="Group"&&(n=p(i,H,this.nbOccurencesMax));const s=await d(N,n);this.uriData=(t=s.results)===null||t===void 0?void 0:t.bindings.map(o=>({uri:o.item.value,label:o.name.value}))}}async executeAllQueries(){this.isLoadingData=!0,this.api=="gnd"&&await this.getDataGND(),this.api=="wikidata"&&await this.getDataWikiData(),this.api=="idref"&&await this.getDataIdRef(),this.api=="geovistory"&&await this.getGeovistoryData(),this.isLoadingData=!1}handleClick(t){this.isPopoverOpen=!0,this.popoverItem=t}handleDismiss(){this.isPopoverOpen=!1}handleSelected(t){this.selected.emit({uri:t.uri})}handleCopy(t){navigator.clipboard.writeText(t.uri)}async componentDidLoad(){await this.executeAllQueries()}componentDidRender(){this.isPopoverOpen&&(this.popoverElement.present(),this.popoverElement.onDidDismiss().then(()=>{this.isPopoverOpen=!1}))}render(){return e(m,null,this.isPopoverOpen&&e("ion-popover",{ref:t=>this.popoverElement=t},this.displaySelectBtn&&e("ion-button",{expand:"block",onClick:()=>this.handleSelected(this.popoverItem)},"Select"),this.displayOpenBtn&&e("ion-button",{expand:"block",href:this.popoverItem.uri,fill:"outline",target:"_blank"},"Open",e("ion-icon",{name:"open-outline",slot:"end"})),this.displayCopyBtn&&e("ion-button",{expand:"block",fill:"clear",onClick:()=>this.handleCopy(this.popoverItem)},"Copy",e("ion-icon",{name:"copy-outline",slot:"end"})),e("ion-button",{expand:"block",fill:"clear",onClick:()=>this.handleDismiss()},e("ion-icon",{name:"close-circle-outline"}))),e("ion-card",null,e("ion-card-header",null,e("ion-card-subtitle",null,this.title)),e("ion-card-content",null,this.isLoadingData&&e("div",{style:{display:"flex",justifyContent:"center"}},e("ion-spinner",null)),!this.isLoadingData&&e("ion-list",{lines:"full"},this.uriData&&this.uriData.length===0&&e("ion-item",{lines:"none"},"Nothing found"),this.uriData&&this.uriData.map((t,i)=>e("ion-item",{lines:i===this.uriData.length-1?"none":"full"},e("ion-grid",{class:"containerResponsive"},e("ion-row",null,e("ion-col",{class:"colContent"},e("ion-label",null,e("h2",null,t.label),e("p",null,t.uri))),e("ion-col",{class:"colButtons"},this.displayCopyBtn&&e("ion-button",{fill:"clear",onClick:()=>this.handleCopy(t)},"Copy",e("ion-icon",{name:"copy-outline",slot:"end"})),this.displayOpenBtn&&e("ion-button",{fill:"clear",href:t.uri,target:"_blank"},"Open",e("ion-icon",{name:"open-outline",slot:"end"})),this.displaySelectBtn&&e("ion-button",{onClick:()=>this.handleSelected(t)},"Select")),e("ion-col",{class:"colMenu"},e("ion-button",{onClick:()=>this.handleClick(t)},e("ion-icon",{name:"menu-outline"})))))))))),e("slot",null))}static get watchers(){return{api:["validateApiValue"],keywords:["keywordsHandler"],type:["typeHandler"]}}};u.style=j;export{u as geov_authority_lookup_explorer};
