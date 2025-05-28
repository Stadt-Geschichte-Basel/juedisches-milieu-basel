import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';

const GeovDisplayGeosparqlWktliteral = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = undefined;
  }
  render() {
    //http://www.opengis.net/def/crs/EPSG/0/4326>POINT(4.79583 52.55417)
    let coord = this.value.replace('<http://www.opengis.net/def/crs/EPSG/0/4326>POINT(', '');
    coord = coord.replace(')', '');
    const coordonnees = coord.split(' ');
    return (h(Fragment, null, "long: ", coordonnees[0], ", lat: ", coordonnees[1]));
  }
};

export { GeovDisplayGeosparqlWktliteral as geov_display_geosparql_wktliteral };

//# sourceMappingURL=geov-display-geosparql-wktliteral.entry.js.map