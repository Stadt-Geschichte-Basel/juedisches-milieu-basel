import{l as s}from"./p-a533da20.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const a=e=>{const t=e;let l;return{hasLegacyControl:()=>{if(l===void 0){const r=t.label!==void 0||u(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&t.shadowRoot===null,o=s(t);l=t.legacy===!0||!r&&!n&&o!==null}return l}}},u=e=>e.shadowRoot===null?!1:!!(c.includes(e.tagName)&&e.querySelector('[slot="label"]')!==null||i.includes(e.tagName)&&e.textContent!==""),c=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"];export{a as c};
