import{r as c,h as r,H as l}from"./p-1bafedb0.js";import{i as h}from"./p-27a92608.js";const v=async()=>new Promise((e,t)=>{if(h())return e(null);if("mermaid"in window)return e(window.mermaid);const n=document.createElement("script");n.type="module";const i="mermaid-loaded",o="mermaid-loading-error";n.innerHTML=`
      try {
        // load mermaid
        var mermaid = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');

        // add to window
        window.mermaid = mermaid.default;

        // dispatch loaded event
        window.dispatchEvent(new Event("${i}"));

      } catch (error) {
        // dispatch error event
        window.dispatchEvent(new CustomEvent("${o}", {detail: error}));
      }
    `;const d=()=>{window.removeEventListener(i,d),e(window.mermaid)};window.addEventListener(i,d);const s=m=>{window.removeEventListener(o,s),t(m.detail)};window.addEventListener(o,s),document.body.appendChild(n)}),w=":host{display:block}",a=class{constructor(e){c(this,e),this.value="",this.svg=void 0,this.error=void 0}async componentWillLoad(){this.mermaid=await v()}async componentDidLoad(){}extractChartString(){var e,t;const n=(t=(e=this.slotElement)===null||e===void 0?void 0:e.assignedNodes())===null||t===void 0?void 0:t[0];return n?.nodeType!==3?this.error="Please place (only) the mermaid chart string in the geov-mermaid element":n.data}async createSVG(){if(!this.mermaid)return;const e=this.extractChartString();try{const{svg:t}=await this.mermaid.render("graphDiv",e);this.svg=t}catch(t){this.error=t.toString()}}render(){return r(l,null,r("span",{style:{display:"none"}},r("slot",{onSlotchange:()=>this.createSVG(),ref:e=>this.slotElement=e})),r("div",{innerHTML:this.svg}),this.error&&r("pre",{style:{color:"red"}},this.error))}};a.style=w;export{a as geov_mermaid};
