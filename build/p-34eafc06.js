import{w as t}from"./p-c76826f0.js";import{r as e}from"./p-a533da20.js";import{a as r}from"./p-b4215fed.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(r,n,o)=>{let i;let s;if(t!==undefined&&"MutationObserver"in t){i=new MutationObserver((t=>{for(const r of t){for(const t of r.addedNodes){if(t.nodeType===Node.ELEMENT_NODE&&t.slot===n){o();e((()=>f(t)));return}}}}));i.observe(r,{childList:true})}const f=t=>{var e;if(s){s.disconnect();s=undefined}s=new MutationObserver((t=>{o();for(const e of t){for(const t of e.removedNodes){if(t.nodeType===Node.ELEMENT_NODE&&t.slot===n){d()}}}}));s.observe((e=t.parentElement)!==null&&e!==void 0?e:t,{subtree:true,childList:true})};const c=()=>{if(i){i.disconnect();i=undefined}d()};const d=()=>{if(s){s.disconnect();s=undefined}};return{destroy:c}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(t,e,n)=>{const o=t==null?0:t.toString().length;const s=i(o,e);if(n===undefined){return s}try{return n(o,e)}catch(t){r("Exception in provided `counterFormatter`.",t);return s}};const i=(t,e)=>`${t} / ${e}`;export{n as c,o as g};
//# sourceMappingURL=p-34eafc06.js.map