/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=(e,t,n)=>{if(typeof MutationObserver>"u")return;const r=new MutationObserver(o=>{n(d(o,t))});return r.observe(e,{childList:!0,subtree:!0}),r},d=(e,t)=>{let n;return e.forEach(r=>{for(let o=0;o<r.addedNodes.length;o++)n=s(r.addedNodes[o],t)||n}),n},s=(e,t)=>e.nodeType!==1?void 0:(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(r=>r.value===e.value);export{u as w};
