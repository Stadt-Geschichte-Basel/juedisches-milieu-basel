(function(){function e(){if(!document.body){setTimeout(e);return}function t(){try{return new Function('import("")'),!0}catch{}return!1}var n="noModule"in document.createElement("script");n?document.body.innerHTML=`
  
<style>
body {
  display: block !important;
  font-family: sans-serif;
  padding: 20px;
  line-height:22px;
}
h1 {
  font-size: 18px;
}
h2 {
  font-size: 14px;
  margin-top: 40px;
}
</style>


  <h1>Update src/index.html</h1>

  <p>Stencil recently changed how scripts are loaded in order to improve performance.</p>

  <h2>BEFORE:</h2>
  <p>Previously, a single script was included that handled loading the correct JavaScript based on browser support.</p>
  <pre>
  <code>&lt;script src=&quot;/build/app.js&quot;&gt;&lt;/script&gt;
</code>
  </pre>

  <h2 style="margin-top:0">AFTER:</h2>
  <p>The index.html should now include two scripts using the modern ES Module script pattern.
  Note that only one file will actually be requested and loaded based on the browser's native support for ES Modules.
  For more info, please see <a href="https://developers.google.com/web/fundamentals/primers/modules#browser" target="_blank" rel="noopener noreferrer">Using JavaScript modules on the web</a>.
  </p>
  <pre>
  <code>&lt;script <span style="background:yellow">type="module"</span> src="/build/app<span style="background:yellow">.esm</span>.js"&gt;&lt;/script&gt;
  &lt;script <span style="background:yellow">nomodule</span> src=&quot;/build/app.js&quot;&gt;&lt;/script&gt;</code>
  </pre>
`:(document.body.innerHTML=`
  
<style>
body {
  display: block !important;
  font-family: sans-serif;
  padding: 20px;
  line-height:22px;
}
h1 {
  font-size: 18px;
}
h2 {
  font-size: 14px;
  margin-top: 40px;
}
</style>


  <h1>This Stencil app is disabled for this browser.</h1>

  <h2>Developers:</h2>
  <ul>
  <li>ES5 builds are disabled <strong>during development</strong> to take advantage of 2x faster build times.</li>
  <li>Please see the example below or our <a href="https://stenciljs.com/docs/stencil-config" target="_blank" rel="noopener noreferrer">config docs</a> if you would like to develop on a browser that does not fully support ES2017 and custom elements.</li>
  <li>Note that as of Stencil v2, ES5 builds and polyfills are <strong>disabled</strong> during production builds. You can enable these <a href="https://stenciljs.com/docs/config#buildes5" target="_blank" rel="noopener noreferrer">in your stencil.config.ts file</a>.</li>
  <li>When testing browsers it is recommended to always test in production mode, and ES5 builds should always be enabled during production builds.</li>
  <li><em>This is only an experiment and if it slows down app development then we will revert this and enable ES5 builds during dev.</em></li>
  </ul>


  <h2>Enabling ES5 builds during development:</h2>
  <pre>
  <code>npm run dev --es5</code>
  </pre>
  <p>For stencil-component-starter, use:</p>
  <pre>
  <code>npm start --es5</code>
  </pre>


  <h2>Enabling full production builds during development:</h2>
  <pre>
  <code>npm run dev --prod</code>
  </pre>
  <p>For stencil-component-starter, use:</p>
  <pre>
  <code>npm start --prod</code>
  </pre>

  <h2>Current Browser's Support:</h2>
  <ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">ES Module Imports</a>: <span id="es-modules-test"></span></li>
  <li><a href="http://2ality.com/2017/01/import-operator.html">ES Dynamic Imports</a>: <span id="es-dynamic-modules-test"></span></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements">Custom Elements</a>: <span id="custom-elements-test"></span></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a>: <span id="shadow-dom-test"></span></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a>: <span id="fetch-test"></span></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables">CSS Variables</a>: <span id="css-variables-test"></span></li>
  </ul>

  <h2>Current Browser:</h2>
  <pre>
  <code id="current-browser-output"></code>
  </pre>
`,document.getElementById("current-browser-output").textContent=window.navigator.userAgent,document.getElementById("es-modules-test").textContent=n,document.getElementById("es-dynamic-modules-test").textContent=t(),document.getElementById("shadow-dom-test").textContent=!!document.head.attachShadow,document.getElementById("custom-elements-test").textContent=!!window.customElements,document.getElementById("css-variables-test").textContent=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("color","var(--c)")),document.getElementById("fetch-test").textContent=!!window.fetch)}setTimeout(e)})();
