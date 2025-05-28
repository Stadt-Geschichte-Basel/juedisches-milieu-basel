import{j as o,w as s}from"./p-1bafedb0.js";import{a as t,s as a}from"./p-00ddae2e.js";import{c as r}from"./p-a533da20.js";import"./p-b4215fed.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const e=()=>{const e=window;e.addEventListener("statusTap",(()=>{o((()=>{const o=e.innerWidth;const n=e.innerHeight;const i=document.elementFromPoint(o/2,n/2);if(!i){return}const p=t(i);if(p){new Promise((o=>r(p,o))).then((()=>{s((async()=>{p.style.setProperty("--overflow","hidden");await a(p,300);p.style.removeProperty("--overflow")}))}))}}))}))};export{e as startStatusTap};
//# sourceMappingURL=p-8c9ee480.js.map