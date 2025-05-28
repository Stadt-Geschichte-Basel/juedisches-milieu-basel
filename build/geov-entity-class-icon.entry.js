import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { p as personOutline, l as locationOutline, b as peopleOutline, f as boatOutline, g as calendarClearOutline, j as calendarOutline, k as documentTextOutline, n as skullOutline, q as balloonOutline, r as heartHalfOutline, t as transgenderOutline, u as briefcaseOutline, v as starOutline, w as earthOutline, x as chatbubbleEllipsesOutline, y as ellipseOutline } from './index-8d6f5b95.js';

const geovEntityClassIconCss = ":host{display:inline;vertical-align:middle}ion-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}";

const iconMap = {
  'https://ontome.net/ontology/c21': personOutline,
  'https://ontome.net/ontology/c363': locationOutline,
  'https://ontome.net/ontology/c68': peopleOutline,
  'https://ontome.net/ontology/c523': boatOutline,
  'https://ontome.net/ontology/c50': calendarClearOutline,
  'http://www.w3.org/2006/time#DateTimeDescription': calendarOutline,
  'https://ontome.net/ontology/c785': documentTextOutline,
  'https://ontome.net/ontology/c63': skullOutline,
  'https://ontome.net/ontology/c61': balloonOutline,
  'https://ontome.net/ontology/c633': heartHalfOutline,
  'https://ontome.net/ontology/c442': peopleOutline,
  'https://ontome.net/ontology/c629': transgenderOutline,
  'https://ontome.net/ontology/c697': briefcaseOutline,
  'https://ontome.net/ontology/c698': briefcaseOutline,
  'https://ontome.net/ontology/c213': briefcaseOutline,
  'https://ontome.net/ontology/c444': briefcaseOutline,
  'https://ontome.net/ontology/c636': briefcaseOutline,
  'https://ontome.net/ontology/c637': briefcaseOutline,
  'https://ontome.net/ontology/c5': starOutline,
  'https://ontome.net/ontology/c535': starOutline,
  'https://ontome.net/ontology/c933': documentTextOutline,
  'https://ontome.net/ontology/c84': earthOutline,
  'https://ontome.net/ontology/c868': chatbubbleEllipsesOutline, // Person Apppellation in a Language
};
const defaultIcon = ellipseOutline;
const GeovEntityClassIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classURI = undefined;
  }
  render() {
    var _a;
    const icon = (_a = iconMap[this.classURI]) !== null && _a !== void 0 ? _a : defaultIcon;
    return h(Host, null, icon && h("ion-icon", { icon: icon }));
  }
};
GeovEntityClassIcon.style = geovEntityClassIconCss;

export { GeovEntityClassIcon as geov_entity_class_icon };

//# sourceMappingURL=geov-entity-class-icon.entry.js.map