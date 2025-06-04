/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(t,r)=>r.closest(t)!==null,c=(t,r)=>typeof t=="string"&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},r):r,l=t=>t!==void 0?(Array.isArray(t)?t:t.split(" ")).filter(e=>e!=null).map(e=>e.trim()).filter(e=>e!==""):[],u=t=>{const r={};return l(t).forEach(e=>r[e]=!0),r},i=/^[a-z][a-z0-9+\-.]*:/,a=async(t,r,e,s)=>{if(t!=null&&t[0]!=="#"&&!i.test(t)){const o=document.querySelector("ion-router");if(o)return r?.preventDefault(),o.push(t,e,s)}return!1};export{c,u as g,n as h,a as o};
