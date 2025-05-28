import { r as registerInstance, i as h, F as Fragment, f as getAssetPath } from './index-c3fe8f75.js';
import { t as titles } from './titles-76c7ba57.js';
import { o as openOutline } from './index-8d6f5b95.js';

const pageTeil11Css = ":host{display:block}";

const nr = 11;
const PageTeil11 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Fragment, null, h("app-header", { headerTitle: titles[nr] }), h("ion-content", { class: "ion-padding", id: "main-menu" }, h("app-content", null, h("h1", { class: "ion-hide-md-down" }, titles[nr]), h("p", { class: "lead" }, "B\u00E2leph \u2013 Ein Streifzug durch Basels j\u00FCdische Geschichte.", h("br", null), " 13 Stationen in der Basler Innenstadt."), h("p", null, "Der Stadtrundgang B\u00E2leph macht die j\u00FCdische Geschichte von Basel lebendig und virtuell sichtbar. \u00DCber den Link unten gelangst Du auf den Rundgang, der dich zu 13 Stationen in der Stadt Basel f\u00FChrt \u2013 von der Gerbergasse hinauf zur Pfalz, vom Rhein \u00FCber den Petersplatz zur Synagoge, \u00FCber den Heuberg hinunter zum Barf\u00FCsserplatz."), h("ion-card", { class: "max-width-sm" }, h("img", { alt: "B\u00E2leph - Ein Streifzug durch Basels j\u00FCdische Geschichte", src: "https://media.izi.travel/53167cc8-64bd-48d3-a651-8629dfcfab53/a9bef305-819c-4c5b-89bc-ab0119671d44_800x600.jpg" }), h("ion-card-header", null, h("ion-card-title", null, "B\u00E2leph"), h("ion-card-subtitle", null, "IZI.TRAVEL")), h("ion-card-content", null, "Ein Streifzug durch Basels j\u00FCdische Geschichte"), h("ion-button", { href: "https://izi.travel/de/942d-baleph-ein-streifzug-durch-basels-judische-geschichte/de", fill: "clear", target: "_blank" }, "Webseite \u00F6ffnen", h("ion-icon", { slot: "end", icon: openOutline }))), h("p", null, "An den 13 Stationen werden Ereignisse und Personen beschrieben, die Einblicke in die Geschichte des j\u00FCdischen Basels erm\u00F6glichen. Der Rundgang kann rein virtuell begangen und geh\u00F6rt werden: Die Erz\u00E4hlung der 13 Stationen dauert rund 60 Minuten, der Rundgang in der Stadt etwa eineinhalb bis zwei Stunden."), h("p", null, "Die Historikerin Isabel Schlerkmann und die Arch\u00E4ologin Sabina Lutz haben den Rundgang \u00ABB\u00E2leph \u2013 Ein Streifzug durch Basels j\u00FCdische Geschichte\u00BB 2014 konzipiert und umgesetzt."), h("h2", null, "R\u00E4tsel"), h("p", null, " Wie heisst die 1961 gegr\u00FCndete j\u00FCdische Primarschule? ", h("br", null), " Die Antwort findest Du in der 8. Station des Rundgangs."), h("p", null, h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Arthur Cohn"), h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Moise Nordmann"), h("ion-button", { color: "primary", onClick: _ => this.successModal.open() }, "Leo Adler")))), h("app-dialog-fail", { ref: e => (this.failModal = e), titleTxt: 'Leider falsch' }, h("p", null, "Die richtige Antwort ist \u00ABLeo Adler\u00BB")), h("app-dialog-success", { nr: nr, ref: e => (this.successModal = e) }, h("ion-img", { src: getAssetPath('../../assets/hurray.gif') }), h("div", { class: "ion-padding" }, "Du hast Kapitel \u00AB", titles[nr], "\u00BB erfolgreich abgeschlossen\u00A0!!"))));
  }
};
PageTeil11.style = pageTeil11Css;

export { PageTeil11 as page_teil_11 };

//# sourceMappingURL=page-teil-11.entry.js.map