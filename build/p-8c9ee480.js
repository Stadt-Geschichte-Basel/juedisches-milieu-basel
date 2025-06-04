import{j as a,w as i}from"./p-1bafedb0.js";import{a as m,s as p}from"./p-00ddae2e.js";import{c}from"./p-a533da20.js";import"./p-b4215fed.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=()=>{const o=window;o.addEventListener("statusTap",()=>{a(()=>{const r=o.innerWidth,s=o.innerHeight,e=document.elementFromPoint(r/2,s/2);if(!e)return;const t=m(e);t&&new Promise(n=>c(t,n)).then(()=>{i(async()=>{t.style.setProperty("--overflow","hidden"),await p(t,300),t.style.removeProperty("--overflow")})})})})};export{d as startStatusTap};
