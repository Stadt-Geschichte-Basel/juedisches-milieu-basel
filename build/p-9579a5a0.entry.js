import{r as x,h as d,H as N}from"./p-1bafedb0.js";import{a as M,i as w}from"./p-6bc8d60f.js";import{i as S}from"./p-66f7ee4f.js";import{i as E}from"./p-27a92608.js";const C=`:host,
geov-yasgui-map-circles {
  container-type: size;
  display: block;
  width: 100%;
  height: 100%;
}

.geov-map-circles-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.geov-map-circles-container .maplibregl-popup-content {
  overflow-y: auto;
  max-height: 210px;
  padding: 0;
}


geov-yasgui-map-circles ion-list {
  overflow-y: auto;
}

.legend {
  position: absolute;
  z-index: 1;
  max-width: 300px;
  margin: 0;
  top: 10px;
  left: 10px;
  max-height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
}


.legend .collapse-button {
  position: absolute;
  margin: 0;
  top: 4px;
  left: 0;
  z-index: 9999;
}

.legend.collapsed {
  width: 46px;
  height: 36px;

}


@container (width >=700px) {
  .legend {
    max-width: 300px;
  }
}

#display-query {
  position: absolute;
  z-index: 1;
  right: 0;
}

.yasgui .hidden {
  display: none !important;
}
`;function z(n,t){return{type:"FeatureCollection",features:n.map(e=>{var i,o,s,r,u,a,l;return{type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(e.long.value),parseFloat(e.lat.value)]},properties:{label:(i=e.label)===null||i===void 0?void 0:i.value,radius:Math.round((parseFloat((o=e.radius)===null||o===void 0?void 0:o.value)||0)*10)/10,number:parseInt((s=e.number)===null||s===void 0?void 0:s.value),type:((r=e.type)===null||r===void 0?void 0:r.value)||"none",typeindex:t.indexOf(((u=e.type)===null||u===void 0?void 0:u.value)||"none"),link:(a=e.link)===null||a===void 0?void 0:a.value,children:(l=e.children)===null||l===void 0?void 0:l.value}}})}}const b=class{constructor(n){x(this,n),this.data=[{radius:{value:"80.2345",type:"literal"},number:{value:"0",type:"literal"},type:{value:"default",type:"literal"},long:{value:"8.2318",type:"literal"},lat:{value:"46.7985",type:"literal"},label:{value:"default",type:"literal"},link:{value:"default",type:"literal"}}],this.radiusMin=8,this.radiusMax=20,this.maxZoom=10,this.colorScale=["#a6cee3","#1f78b4","#b2df8a","#33a02c"],this.ledgendExpanded=!0,this.disableScrollZoom=!1,this.displayMapNavigationControls=!1,this.labelIndices=[...new Set(this.data.map(t=>{var e;return((e=t.type)===null||e===void 0?void 0:e.value)||"none"}))]}async componentDidLoad(){if(!E()){const n=this.data.filter(t=>{var e,i,o,s,r,u,a,l,p;return Object.hasOwn(t,"radius")&&(isNaN((e=t.radius)===null||e===void 0?void 0:e.value)||Number((i=t.radius)===null||i===void 0?void 0:i.value)===0)||Object.hasOwn(t,"number")&&isNaN((o=t.number)===null||o===void 0?void 0:o.value)?!0:Number((s=t.long)===null||s===void 0?void 0:s.value)<-180||Number((r=t.long)===null||r===void 0?void 0:r.value)>180||Number((u=t.lat)===null||u===void 0?void 0:u.value)<-90||Number((a=t.lat)===null||a===void 0?void 0:a.value)>90||isNaN((l=t.long)===null||l===void 0?void 0:l.value)||isNaN((p=t.lat)===null||p===void 0?void 0:p.value)});if(!n?.length){const t=await S(),e=new t.Map({container:this.mapContainerEl,style:{version:8,sources:{osm:{type:"raster",tiles:["https://a.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png","https://b.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png","https://c.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png"],tileSize:256,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',maxzoom:19}},layers:[{id:"osm",type:"raster",source:"osm"}],glyphs:"https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf"},zoom:6});let i=Number.MAX_VALUE,o=Number.MIN_VALUE,s=Number.MAX_VALUE,r=Number.MIN_VALUE;this.data.forEach(a=>{const l=parseFloat(a.long.value),p=parseFloat(a.lat.value);i=Math.min(i,l),o=Math.max(o,l),s=Math.min(s,p),r=Math.max(r,p)});const u=[[i,s],[o,r]];e.fitBounds(u,{padding:50,maxZoom:this.maxZoom,animate:!1}),this.disableScrollZoom&&e.scrollZoom.disable(),this.displayMapNavigationControls&&e.addControl(new t.NavigationControl),e.on("load",()=>{e.addSource("places",{type:"geojson",data:z(this.data,this.labelIndices)});const a=Math.max(...this.data.map(c=>{var v;return parseInt((v=c.radius)===null||v===void 0?void 0:v.value)||0}));let l;if(this.colorScale.length<2)l=this.colorScale[0];else{l=["step",["get","typeindex"]];for(let c=0;c<this.colorScale.length;c++)c>0&&l.push(c),l.push(this.colorScale[c])}e.addLayer({id:"circles",type:"circle",source:"places",paint:{"circle-color":l,"circle-radius":a?["interpolate",["linear"],["get","radius"],0,this.radiusMin,a,this.radiusMax]:this.radiusMin,"circle-opacity":.8}});const p=c=>{const v=c.features[0].geometry.coordinates,f=c.features.map(m=>{let y=[];try{y=JSON.parse(m.properties.children)}catch{}return{label:m.properties.label,url:m.properties.link,suffix:m.properties.number,items:y.map(h=>({label:h?.label,url:h?.url}))}}),g=document.createElement("geov-map-circles-popup");g.items=f,new t.Popup().setLngLat(v).setDOMContent(g).setMaxWidth("340px").addTo(e)};e.on("click","circles",p),e.on("mouseenter","circles",()=>{e.getCanvas().style.cursor="pointer"}),e.on("mouseleave","circles",()=>{e.getCanvas().style.cursor=""})})}}}render(){return d(N,null,d("ion-card",{class:`legend ${this.ledgendExpanded?"":"collapsed"}`},d("ion-card-header",null,d("ion-button",{size:"small",class:"collapse-button",fill:"clear",onClick:()=>this.ledgendExpanded=!this.ledgendExpanded},d("ion-icon",{icon:this.ledgendExpanded?M:w,slot:"icon-only"}))),d("ion-list",null,this.labelIndices.map((n,t)=>d("ion-item",{lines:t===this.labelIndices.length-1?"none":"full"},d("svg",{slot:"start",height:"1rem",width:"1rem"},d("circle",{cx:"50%",cy:"50%",r:"50%",fill:this.colorScale[t%this.colorScale.length]})),d("ion-label",{class:"ion-text-wrap"},n))))),d("div",{class:"geov-map-circles-container",ref:n=>this.mapContainerEl=n}))}};b.style=C;export{b as geov_yasgui_map_circles};
