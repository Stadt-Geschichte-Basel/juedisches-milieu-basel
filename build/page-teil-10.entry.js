import { r as registerInstance, i as h, F as Fragment, f as getAssetPath } from './index-c3fe8f75.js';
import { t as titles } from './titles-76c7ba57.js';

const queryTabs = [
  {
    name: 'Jüdische Handwerker und Israelit. Männerverein Dowor Tow',
    sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_1719422',
    query: `
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX ontome: <https://ontome.net/ontology/>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  PREFIX geov: <http://geovistory.org/resource/>
      SELECT
      (SAMPLE(?buildingLabel) as ?label)
      (CONCAT(
      '[',
          GROUP_CONCAT(CONCAT('{"label":"',?persName,'", "url":"',str(?person),'?p=1719422"}'); separator=', '),
          ']'
      ) as ?children)

      ?long ?lat ?link ?type
      (count(?link) * 0.5 as ?radius)
      WHERE {

      # Construction -had presence-> Presence -was at-> Place (lat/long)
      ?building ontome:p147i/ontome:p148 ?place.

      # Construction -label-> label
      ?building rdfs:label ?buildingLabel.

      # Construction -is location of-> Legal location of an Actor
      ?building ontome:p1851i ?location.

      # -is social quality of -> Person
      ?location ontome:p1411 ?person.

      ?person ontome:p1188i/ontome:p1189 ?group.
      ?group rdfs:label ?type.
      FILTER(?group = geov:i1972234 || ?group = geov:i1929590).

      # Person -label-> persName
      ?person rdfs:label ?persName.

      # Extract lat and long from WKT
      bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
      bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
      bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

      # Append the project query param to the URI
      bind(concat(str(?building), "?p=1719422") as ?link )


      }
      GROUP BY ?building ?long ?lat ?type ?link

      `,
  }
];

const pageTeil10Css = ":host{display:block}";

const nr = 10;
const PageTeil10 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Fragment, null, h("app-header", { headerTitle: titles[nr] }), h("ion-content", { id: "main-menu" }, h("div", { class: 'ion-padding' }, h("h1", { class: "ion-hide-md-down" }, titles[nr]), h("p", { class: 'lead' }, "Ostj\u00FCdische Einwanderung und die Zentren der Wohnorte um 1910"), h("p", null, "Ein erstes Zentrum j\u00FCdischen Lebens hatte sich in der Altstadt rund um den Unteren Heuberg gebildet, wo seit 1850 eine kleine Synagoge in Betrieb war. Mit dem Bau der grossen Synagoge 1868 an der Leimenstrasse entstand ein neuer Ort, der f\u00FCr viele Menschen zum neuen Lebensmittelpunkt wurde.", ' '), h("p", null, "Um die Jahrhundertwende kamen viele osteurop\u00E4ische Juden, die vor Pogromen gefl\u00FCchtet waren, nach Basel. F\u00FCr sie war die Stadt h\u00E4ufig eine Zwischenstation auf dem Weg nach Westen. Mehrere Tausend Ostjuden passierten ab 1906 Basel, wo sie sich oft einen oder mehrere Tage aufhielten. Einige osteurop\u00E4ische J\u00FCdinnen und Juden liessen sich in Basel nieder. 1910 lebten rund 450 Juden russischer und polnisch-russischer Herkunft im Kanton, was rund einem F\u00FCnftel der j\u00FCdischen Bev\u00F6lkerung entsprach. Viele wohnten aufgrund der g\u00FCnstigen Mieten in Kleinbasel und er\u00F6ffneten an der Florastrasse einen Gebetraum. Die osteurop\u00E4ischen Juden unterschieden sich nicht nur kulturell, sondern auch mit ihren Berufen \u2013 \u00FCberdurchschnittlich viele waren Handwerker \u2013 von den bereits ans\u00E4ssigen Juden. Deshalb stiessen sie bei vielen auf Skepsis."), h("p", null, "Der j\u00FCdische Frauenverein ver\u00F6ffentlichte um 1910 eine Liste mit j\u00FCdischen Handwerkerinnen und Handwerker. Die Lokalisierung der Wohnorte dieser Schuh- und Uhrenmacher, N\u00E4herinnen, Schneiderinnen, Coiffeusen und Papier- und \u00D6lh\u00E4ndler macht Zentren j\u00FCdischen Lebens sichtbar. Die Wohnorte ballten sich in der Altstadt und im Hegenheimerquartier. Vereinzelte Handwerkerinnen und Handwerker wohnten im Kleinbasel.", ' '), h("p", null, "Die j\u00FCdische Buchhandlung Goldschmidt, 1902 vom geb\u00FCrtigen Litauer Pessach Meir Goldschmidt am Heuberg er\u00F6ffnet, befand sich ebenso in der Grossbasler Altstadt wie die beiden koscheren Hotels und Restaurants von Mathilde Braunschweig-Ebstein (Hotel Kahn-Braunschweig) und Liselotte Simon-Wunderlin (Hotel Simon). Hier trafen sich die j\u00FCdischen Vereine zu Versammlungen und Sitzungen.", ' ')), h("app-video", { class: 'unrestricted-width', style: { maxWidth: '1000px', margin: '0 auto', padding: '1rem' } }, h("geov-yasgui", { queryTabs: queryTabs, style: { background: '#fff', height: '400px' }, plugins: new Set(['mapCircles']), defaultPlugin: "mapCircles", collapse: true, hideYasqueToggle: true, pluginConfig: {
        mapCircles: {
          disableScrollZoom: true,
          displayMapNavigationControls: true,
          maxZoom: 25,
          radiusMin: 4,
          radiusMax: 25,
        },
      } }), h("div", { class: 'restricted-width', slot: "caption" }, "Karte basierend auf ", ' ', h("a", { href: "https://www.geovistory.org/project/1719422", target: "_blank", rel: "noopener noreferrer" }, "\u00ABJ\u00FCdische & katholische Zentren Basels\u00BB"), ", umgesetzt mit Geovistory.")), h("div", { class: "ion-padding-start ion-padding-end ion-padding-bottom" }, h("p", null, "Die dunkelblauen Punkte auf der Karte zeigen die Wohnorte der Gr\u00FCndungsmitglieder des israelitischen M\u00E4nnervereins Dowor Tow (1857). Die hellblauen Punkte zeigen die Wohnorte von j\u00FCdischen Handwerkerinnen und Handwerker um 1910 anhand einer Liste, die der j\u00FCdische Frauenverein erstellt hatte. Im Vergleich zeigt sich, dass sich um 1910 Wohnorte zus\u00E4tzlich zur Altstadt auch im Hegenheimerquartier ballten. Nur vereinzelt lebten Personen hingegen in Kleinbasel."), h("h2", null, "R\u00E4tsel"), h("p", null, "Maurice Goldstein wohnte um 1910 am Bl\u00E4siringweg 15 in Kleinbasel. Welchen Beruf \u00FCbte er aus?"), h("p", null, h("ion-button", { color: "primary", onClick: _ => this.successModal.open() }, "Gummischuhh\u00E4ndler"), h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Uhrenmacher"), h("ion-button", { color: "primary", onClick: _ => this.failModal.open() }, "Herrenschneider")), h("app-literatur", { items: [
        h(Fragment, null, "Gerber, Brigitta: \u00ABNicht aber f\u00FCr den Fall einer etwaigen Verheiratung mit einem Nichtberechtigten\u00BB! \u2013 Arbeits- und Niederlassungsbewilligungen mit Vorbehalten, in: Verein Frauenstadtrundgang Basel (Hg.): Geschichten aus der Empore: auf den Spuren j\u00FCdischer Frauen in Basel, Basel 1999, S. 79-95."),
        h(Fragment, null, "Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005."),
        h(Fragment, null, "Kury, Patrick: Ostjudenmigration nach Basel, 1890-1930 : \u00ABMan akzeptierte uns nicht, man tolerierte uns!\u00BB Lizenziatsarbeit, Universit\u00E4t Basel, Basel 1994."),
        h(Fragment, null, "Kury, Patrick: \u00ABFremd und r\u00FCckst\u00E4ndig\u00BB: Ostjuden in Basel um 1900, in: Haumann, Heiko (Hg.): Der Erste Zionistenkongress von 1897 \u2013 Ursachen, Bedeutung, Aktualit\u00E4t, Basel 1997, S. 197-201."),
      ] }))), h("app-dialog-fail", { ref: e => (this.failModal = e), titleTxt: 'Leider falsch' }, h("p", null, "Die richtige Antwort ist \u00ABGummischuhh\u00E4ndler\u00BB")), h("app-dialog-success", { nr: nr, ref: e => (this.successModal = e) }, h("ion-img", { src: getAssetPath('../../assets/hurray.gif') }), h("div", { class: "ion-padding" }, "Du hast Kapitel \u00AB", titles[nr], "\u00BB erfolgreich abgeschlossen\u00A0!!"))));
  }
};
PageTeil10.style = pageTeil10Css;

export { PageTeil10 as page_teil_10 };

//# sourceMappingURL=page-teil-10.entry.js.map