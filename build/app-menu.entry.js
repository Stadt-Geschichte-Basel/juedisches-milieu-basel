import { r as registerInstance, i as h, f as getAssetPath } from './index-c3fe8f75.js';
import { D as checkmarkCircleOutline, i as informationCircleOutline, E as refreshOutline } from './index-8d6f5b95.js';
import { a as appPages } from './appPages-863fd78c.js';
import { s as state } from './store-d393c555.js';
import './titles-76c7ba57.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const appMenuCss = "ion-menu ion-content{--background:var(--ion-item-background, var(--ion-background-color, #fff))}ion-menu.md ion-content{--padding-start:8px;--padding-end:8px;--padding-top:20px;--padding-bottom:20px}ion-menu.md ion-list{padding:20px 0}ion-menu.md ion-note{margin-bottom:30px}ion-menu.md ion-list-header,ion-menu.md ion-note{padding-left:10px}ion-menu.md ion-list#inbox-list{border-bottom:1px solid var(--ion-color-step-150, #d7d8da)}ion-menu.md ion-list#inbox-list ion-list-header{font-size:22px;font-weight:600;min-height:20px}ion-menu.md ion-list#labels-list ion-list-header{font-size:16px;margin-bottom:18px;min-height:26px}ion-menu.md ion-item{--padding-start:10px;--padding-end:10px;border-radius:4px}ion-menu.md ion-item.selected{--background:rgba(var(--ion-color-primary-rgb), 0.14)}ion-menu.md ion-item.selected ion-icon{color:var(--ion-color-primary)}ion-menu.md ion-item ion-icon{color:#616e7e}ion-menu.md ion-item ion-label{font-weight:500}ion-menu.ios ion-content{--padding-bottom:20px}ion-menu.ios ion-list{padding:20px 0 0 0}ion-menu.ios ion-note{line-height:24px;margin-bottom:20px}ion-menu.ios ion-item{--padding-start:16px;--padding-end:16px;--min-height:50px}ion-menu.ios ion-item ion-icon{font-size:24px;color:#73849a}ion-menu.ios ion-item .selected ion-icon{color:var(--ion-color-primary)}ion-menu.ios ion-list#labels-list ion-list-header{margin-bottom:8px}ion-menu.ios ion-list-header,ion-menu.ios ion-note{padding-left:16px;padding-right:16px}ion-menu.ios ion-note{margin-bottom:8px}ion-note{display:inline-block;font-size:16px;color:var(--ion-color-medium-shade)}ion-item.selected{--color:var(--ion-color-primary)}";

const AppMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-menu", { contentId: "main-menu", type: "overlay" }, h("ion-content", null, h("ion-list", { id: "inbox-list" }, h("ion-list-header", null, "Inhalt"), h("ion-note", null, "Eine Geschichte \u2013 12 Teile"), appPages.map((appPage, index) => {
      const t = state[appPage.key];
      return (h("ion-menu-toggle", { key: index, autoHide: false }, h("ion-item", { disabled: t === 'locked' || t === 'highlighted', class: location.pathname === appPage.url ? 'selected' : '', href: appPage.url, routerDirection: "forward", lines: "none", detail: false }, t === 'done' ? (h("ion-icon", { color: "primary", "aria-hidden": "true", slot: "start", icon: checkmarkCircleOutline })) : (h("ion-icon", { color: "primary", "aria-hidden": "true", slot: "start", src: getAssetPath('../../assets/icons/hexagon-outline.svg') })), h("ion-label", null, appPage.title))));
    })), h("ion-list", { id: "labels-list" }, h("ion-note", null, "Rund um diese App"), h("ion-menu-toggle", { autoHide: false }, h("ion-item", { lines: "none", href: '/about-us' }, h("ion-icon", { color: "primary", "aria-hidden": "true", slot: "start", icon: informationCircleOutline }), h("ion-label", null, "Impressum"))), h("ion-item", { lines: "none", button: true, detail: false, onClick: () => this.confirmRestartModal.open() }, h("ion-icon", { color: "primary", "aria-hidden": "true", slot: "start", icon: refreshOutline }), h("ion-label", null, "Neustart ...")), h("app-dialog-restart", { ref: e => (this.confirmRestartModal = e) })))));
  }
};
AppMenu.style = appMenuCss;

export { AppMenu as app_menu };

//# sourceMappingURL=app-menu.entry.js.map