import { r as registerInstance, i as h } from './index-c3fe8f75.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { a as appPages } from './appPages-863fd78c.js';
import { s as state } from './store-d393c555.js';
import './titles-76c7ba57.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const appRootCss = "";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false, ref: e => (routerProvider.ionRouterElement = e) }, h("ion-route-redirect", { from: "/", to: "/intro" }), h("ion-route", { url: "/intro", component: "page-intro" }), h("ion-route", { url: "/puzzle", component: "page-puzzle" }), appPages.map(p => (h("ion-route", { url: p.url, component: p.component, beforeEnter: () => {
        if (state[p.key] === 'locked') {
          const redirect = {
            redirect: '/puzzle',
          };
          return redirect;
        }
        return true;
      } }))), h("ion-route", { url: "/about-us", component: "page-about-us" }), h("ion-route", { url: "/belohnung", component: "page-gratification" })), h("ion-router-outlet", null), h("a", { style: { display: 'none' }, href: "/intro" }), h("a", { style: { display: 'none' }, href: "/puzzle" })));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };

//# sourceMappingURL=app-root.entry.js.map