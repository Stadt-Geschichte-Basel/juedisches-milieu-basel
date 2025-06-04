import{r as s,e as o,h as n,H as a}from"./p-1bafedb0.js";const l=`:host {
  display: block;
}

.containerResponsive {
  container-type: inline-size;
}

div.masonry-container {
  column-count: 1;
}

div.masonry-item {
  width: 100%;
  box-sizing: border-box;
  padding-top: 0.1px;
}

@container (width >= 768px) and (width < 992px) {
  div.masonry-container {
    column-count: 2;
  }
}

@container (width >= 992px) {
  div.masonry-container {
    column-count: 3;
  }
}
`,e=class{constructor(t){s(this,t),this.selected=o(this,"selected",7),this.apis=["gnd","idref","wikidata","geovistory"],this.types=["All","Person","Place","Group"],this.nbOccurencesMax=5,this.displaySelectBtn=!0,this.displayOpenBtn=!0,this.displayCopyBtn=!1,this.nbColMax=2,this.initSearch=void 0,this.initSearchType=void 0,this.keywords="",this.type=""}componentWillLoad(){this.initSearch&&this.initSearch.trim()!=""&&(this.keywords=this.initSearch.trim()),this.initSearchType&&this.initSearchType.trim()!=""&&(this.type=this.initSearchType.trim())}render(){var t;return n(a,null,n("ion-grid",null,n("ion-row",null,n("ion-col",null,n("ion-searchbar",{value:this.keywords,debounce:500,onIonChange:i=>{this.keywords=i.detail.value}})),n("ion-col",null,n("ion-list",null,n("ion-item",null,n("ion-select",{value:this.type,"aria-label":"type",placeholder:"Select type",onIonChange:i=>{this.type=i.detail.value}},this.types&&this.types.map(i=>n("ion-select-option",{value:i},i)))))))),n("div",{class:"containerResponsive"},n("div",{class:"masonry-container",style:this.nbColMax?{columnCount:this.nbColMax.toString()}:{}},this.keywords.length?(t=this.apis)===null||t===void 0?void 0:t.map(i=>n("div",{class:"masonry-item"},n("geov-authority-lookup-explorer",{api:i,keywords:this.keywords,type:this.type,nbOccurencesMax:this.nbOccurencesMax,displayCopyBtn:this.displayCopyBtn,displayOpenBtn:this.displayOpenBtn,displaySelectBtn:this.displaySelectBtn}))):"")),n("slot",null))}};e.style=l;export{e as geov_authority_lookup};
