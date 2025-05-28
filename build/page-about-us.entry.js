import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import { v as version, t as timestamp } from './buildinfo-2b6b7774.js';

const pageAboutUsCss = ":host{display:block}";

const PageAboutUs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Fragment, null, h("app-header", { headerTitle: "Impressum" }), h("ion-content", { class: "ion-padding", id: "main-menu" }, h("app-content", null, h("h1", { class: "ion-hide-md-down" }, "Impressum"), h("h2", null, "Inhalte"), h("p", null, h("strong", null, "Beni Pfister, lic. phil."), h("br", null), "Historiker, Mitautor Band 6 von Stadt.Geschichte.Basel", h("br", null), "Text- und Bildredaktion", ' '), h("h2", null, "App Design"), h("p", null, h("a", { href: "https://kleiolab.ch/", target: "_blank", rel: "noreferrer" }, "KleioLab GmbH")), h("p", null, h("strong", null, "Jonas Schneider, M.A."), h("br", null), "Historiker, Software Entwickler, Mitgr\u00FCnder KleioLab GmbH", h("br", null), "Konzept, Design, Programmierung"), h("p", null, h("strong", null, "David Knecht, M.A."), h("br", null), "\u00D6konom, Manager, Mitgr\u00FCnder KleioLab GmbH", h("br", null), "Projektleitung"), h("h2", null, "Auftraggeber"), h("p", null, h("a", { href: "https://stadtgeschichtebasel.ch/", target: "_blank", rel: "noreferrer" }, "Stadt.Geschichte.Basel")), h("p", null, h("strong", null, "Moritz M\u00E4hr, Dr. sc."), h("br", null), "Leitung digital bei Stadt.Geschichte.Basel", h("br", null), "Studierte Geschichte und Philosophie des Wissens, Informatik und \u00D6konomie in Z\u00FCrich und Berlin."), h("h2", null, "Dank"), h("p", null, h("a", { href: "https://www.juedisches-museum.ch/", target: "_blank", rel: "noreferrer" }, "J\u00FCdisches Museum Schweiz"), h("br", null)), h("p", null, "Besten Dank dem J\u00FCdischen Museum Schweiz f\u00FCr das Bildmaterial und die Belohnung bei erfolgreich abgeschlossenem Spiel in Form eines Gratiseintritts."), h("p", null, h("a", { href: "https://www.geovistory.org/", target: "_blank", rel: "noreferrer" }, "Geovistory"), h("br", null)), h("p", null, "Besten Dank dem Geovistory-Team f\u00FCrs Bereitstellen der Infrastruktur zur Erstellung der Karte in \u00ABZentren um 1910\u00BB."), h("p", { style: { 'margin-top': '8rem' } }, h("ion-note", null, "App Version ", version), h("br", null), h("ion-note", null, "Erstellt am ", timestamp))))));
  }
};
PageAboutUs.style = pageAboutUsCss;

export { PageAboutUs as page_about_us };

//# sourceMappingURL=page-about-us.entry.js.map