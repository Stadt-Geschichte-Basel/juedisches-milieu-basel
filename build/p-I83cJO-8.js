import{w as t}from"./p-ZjP4CjeZ.js";import{r}from"./p-BGUp-1Wb.js";import{b as e}from"./p-nezZJyxV.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(e,n,o)=>{let s;let i;if(t!==undefined&&"MutationObserver"in t){const t=Array.isArray(n)?n:[n];s=new MutationObserver((e=>{for(const n of e){for(const e of n.addedNodes){if(e.nodeType===Node.ELEMENT_NODE&&t.includes(e.slot)){o();r((()=>f(e)));return}}}}));s.observe(e,{childList:true})}const f=t=>{var r;if(i){i.disconnect();i=undefined}i=new MutationObserver((t=>{o();for(const r of t){for(const t of r.removedNodes){if(t.nodeType===Node.ELEMENT_NODE&&t.slot===n){u()}}}}));i.observe((r=t.parentElement)!==null&&r!==void 0?r:t,{subtree:true,childList:true})};const c=()=>{if(s){s.disconnect();s=undefined}u()};const u=()=>{if(i){i.disconnect();i=undefined}};return{destroy:c}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(t,r,n)=>{const o=t==null?0:t.toString().length;const i=s(o,r);if(n===undefined){return i}try{return n(o,r)}catch(t){e("Exception in provided `counterFormatter`.",t);return i}};const s=(t,r)=>`${t} / ${r}`;export{n as c,o as g};
//# sourceMappingURL=p-I83cJO-8.js.map