import { r as registerInstance, i as h, F as Fragment, f as getAssetPath } from './index-c3fe8f75.js';
import { t as titles } from './titles-76c7ba57.js';

const pageTeil3Css = ":host{display:block}";

const nr = 3;
const PageTeil3 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Fragment, null, h("app-header", { headerTitle: titles[nr] }), h("ion-content", { class: "ion-padding", id: "main-menu" }, h("app-content", null, h("h1", { class: "ion-hide-md-down" }, titles[nr]), h("p", { class: "lead" }, "On parle fran\u00E7ais: ", h("br", null), "J\u00FCdische Einwanderung im 19. Jahrhundert"), h("p", null, "Weil J\u00FCdinnen und Juden sich erst seit 1866 frei in der Schweiz niederlassen durften, dauerte es relativ lange, bis sich in Basel eine dritte j\u00FCdische Gemeinde etablieren konnte. Zwischen 1847 und 1849 erhielten alle in Basel geborenen S\u00F6hne aus j\u00FCdischen Familien das Niederlassungsrecht. Die neuen Basler Juden kamen bis 1866 ausschliesslich aus dem Elsass. Viele waren vor antisemitischen Angriffen geflohen. Andere sahen in Basel bessere berufliche Chancen. Auch Salomon Schwob-Dreyfus, der erste offizielle j\u00FCdische Basler B\u00FCrger, stammte urspr\u00FCnglich aus H\u00E9genheim. Mit ihm wurden insgesamt acht j\u00FCdische Familien 1872 ins Basler B\u00FCrgerrecht aufgenommen.", ' '), h("p", null, "Es f\u00E4llt auf, dass in Basel in den drei Jahren nach dem Deutsch-Franz\u00F6sischen Krieg ab 1871 viele Menschen aus dem Elsass das B\u00FCrgerrecht erhielten. Viele zugezogene Juden hatten immer noch Familienangeh\u00F6rige in den Els\u00E4sser D\u00F6rfern. Mit Sorge blickten sie nach Norden, als Deutschland und Frankreich sich 1870 bekriegten. Tausende Fl\u00FCchtende suchten in Basel Schutz. Viele darunter waren j\u00FCdische Franz\u00F6sinnen und Franzosen. Die j\u00FCdischen Vereine k\u00FCmmerten sich um deren Verpflegung und Unterkunft. Die meisten der Geflohenen blieben nicht dauerhaft in Basel und kehrten in ihre Gemeinde zur\u00FCck. Dennoch: In den n\u00E4chsten rund 40 Jahren verf\u00FCnffachte sich die j\u00FCdische Bev\u00F6lkerung in Basel von rund 500 Personen 1870 auf \u00FCber 2400 Personen 1910. Zwar kamen mit der rechtlichen Gleichstellung vermehrt auch Juden aus dem s\u00FCddeutschen Raum, dem Baselbiet und aus Endingen und Lengnau in die Stadt. Die Beziehungen zum Elsass, insbesondere zur Gemeinde H\u00E9genheim blieben aber identit\u00E4tsstiftend f\u00FCr die j\u00FCdische Gemeinde."), h("h2", null, "R\u00E4tsel"), h("p", null, "Wo befindet sich das els\u00E4ssische Dorf H\u00E9genheim: A, B oder C?"), h("app-img", { class: "restricted-width", src: '../../assets/teil-3/karte.jpg' }, "Quelle: Siegfriedkarte von 1864"), h("p", null, h("ion-button", { color: "primary", onClick: _ => this.successModal.open() }, "Antwort A"), h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Antwort B"), h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Antwort C")), h("app-literatur", { items: [
        h(Fragment, null, "Guth-Dreyfus, Katia: 175 Jahre Israelitische Gemeinde Basel, in: Basler Stadtbuch 1980, S. 153-162."),
        h(Fragment, null, "Haumann, Heiko: Juden in Basel und Umgebung \u2013 Zur Geschichte einer Minderheit. Darstellung und Quellen f\u00FCr den Gebrauch an Schulen, Herausgegeben von den Regierungsr\u00E4ten der Kantone Basel-Stadt und Basel-Landschaft, Basel 1999."),
        h(Fragment, null, "Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005."),
        h(Fragment, null, "Pfister, Willy: Die Einb\u00FCrgerung der Ausl\u00E4nder in der Stadt Basel im 19. Jahrhundert, Basel 1976."),
      ] }), h("app-dialog-fail", { ref: e => (this.failModal = e), titleTxt: 'Leider falsch' }, h("p", null, "Die richtige Antwort ist A")), h("app-dialog-success", { nr: nr, ref: e => (this.successModal = e) }, h("ion-img", { src: getAssetPath('../../assets/hurray.gif') }), h("div", { class: "ion-padding" }, "Du hast Kapitel \u00AB", titles[nr], "\u00BB erfolgreich abgeschlossen\u00A0!!")))), h("app-footer", null)));
  }
};
PageTeil3.style = pageTeil3Css;

export { PageTeil3 as page_teil_3 };

//# sourceMappingURL=page-teil-3.entry.js.map