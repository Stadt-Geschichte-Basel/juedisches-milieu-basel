import { r as registerInstance, l as createEvent } from './index-c3fe8f75.js';

const RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
    this.from = undefined;
    this.to = undefined;
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() { return {
    "from": ["propDidChange"],
    "to": ["propDidChange"]
  }; }
};

export { RouteRedirect as ion_route_redirect };

//# sourceMappingURL=ion-route-redirect.entry.js.map