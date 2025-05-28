import { r as registerInstance, i as h, m as Host } from './index-c3fe8f75.js';
import { a as closeOutline, i as informationCircleOutline } from './index-8d6f5b95.js';
import { i as importMapLibre } from './importMapLibre-b90da2cb.js';
import { i as isNode } from './isNode-e6f1444c.js';

const geovYasguiMapCirclesCss = ":host,\ngeov-yasgui-map-circles {\n  container-type: size;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.geov-map-circles-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.geov-map-circles-container .maplibregl-popup-content {\n  overflow-y: auto;\n  max-height: 210px;\n  padding: 0;\n}\n\n\ngeov-yasgui-map-circles ion-list {\n  overflow-y: auto;\n}\n\n.legend {\n  position: absolute;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0;\n  top: 10px;\n  left: 10px;\n  max-height: calc(100% - 20px);\n  display: flex;\n  flex-direction: column;\n}\n\n\n.legend .collapse-button {\n  position: absolute;\n  margin: 0;\n  top: 4px;\n  left: 0;\n  z-index: 9999;\n}\n\n.legend.collapsed {\n  width: 46px;\n  height: 36px;\n\n}\n\n\n@container (width >=700px) {\n  .legend {\n    max-width: 300px;\n  }\n}\n\n#display-query {\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n\n.yasgui .hidden {\n  display: none !important;\n}\n";

function createGeoJSON(data, labelIndices) {
  return {
    type: 'FeatureCollection',
    features: data.map(ele => {
      var _a, _b, _c, _d, _e, _f, _g;
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(ele['long'].value), parseFloat(ele['lat'].value)],
        },
        //set the properties to the .value of the ele
        properties: {
          label: (_a = ele['label']) === null || _a === void 0 ? void 0 : _a.value,
          radius: Math.round((parseFloat((_b = ele['radius']) === null || _b === void 0 ? void 0 : _b.value) || 0) * 10) / 10,
          number: parseInt((_c = ele['number']) === null || _c === void 0 ? void 0 : _c.value),
          type: ((_d = ele['type']) === null || _d === void 0 ? void 0 : _d.value) || 'none',
          typeindex: labelIndices.indexOf(((_e = ele['type']) === null || _e === void 0 ? void 0 : _e.value) || 'none'),
          link: (_f = ele['link']) === null || _f === void 0 ? void 0 : _f.value,
          children: (_g = ele['children']) === null || _g === void 0 ? void 0 : _g.value,
        },
      };
    }),
  };
}
const GeovYasguiMapCircles = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [
      {
        radius: { value: '80.2345', type: 'literal' },
        number: { value: '0', type: 'literal' },
        type: { value: 'default', type: 'literal' },
        long: { value: '8.2318', type: 'literal' },
        lat: { value: '46.7985', type: 'literal' },
        label: { value: 'default', type: 'literal' },
        link: { value: 'default', type: 'literal' },
      },
    ];
    this.radiusMin = 8;
    this.radiusMax = 20;
    this.maxZoom = 10;
    this.colorScale = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c'];
    this.ledgendExpanded = true;
    this.disableScrollZoom = false;
    this.displayMapNavigationControls = false;
    this.labelIndices = [...new Set(this.data.map(ele => { var _a; return ((_a = ele['type']) === null || _a === void 0 ? void 0 : _a.value) || 'none'; }))];
  }
  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      /*
       * Validation: Long and Lat must be numbers and < 540 and > -540, they can also not be omitted
       * Radius must be a number and not 0, it can be omitted
       * Number must be a number, it can be omitted
       */
      const invalidPoints = this.data.filter(d => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        //@ts-ignore - we want the coercion of isNan
        if (Object.hasOwn(d, 'radius') && (isNaN((_a = d['radius']) === null || _a === void 0 ? void 0 : _a.value) || Number((_b = d['radius']) === null || _b === void 0 ? void 0 : _b.value) === 0))
          return true;
        //@ts-ignore - we want the coercion of isNan
        if (Object.hasOwn(d, 'number') && isNaN((_c = d['number']) === null || _c === void 0 ? void 0 : _c.value))
          return true;
        return (Number((_d = d['long']) === null || _d === void 0 ? void 0 : _d.value) < -180 ||
          Number((_e = d['long']) === null || _e === void 0 ? void 0 : _e.value) > 180 ||
          Number((_f = d['lat']) === null || _f === void 0 ? void 0 : _f.value) < -90 ||
          Number((_g = d['lat']) === null || _g === void 0 ? void 0 : _g.value) > 90 ||
          //@ts-ignore - we want the coercion of isNan
          isNaN((_h = d['long']) === null || _h === void 0 ? void 0 : _h.value) ||
          //@ts-ignore - we want the coercion of isNan
          isNaN((_j = d['lat']) === null || _j === void 0 ? void 0 : _j.value));
      });
      if (!(invalidPoints === null || invalidPoints === void 0 ? void 0 : invalidPoints.length)) {
        // Load MapLibre script
        const MapLibre = await importMapLibre();
        const map = new MapLibre.Map({
          container: this.mapContainerEl,
          style: {
            version: 8,
            sources: {
              osm: {
                type: 'raster',
                tiles: [
                  'https://a.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
                  'https://b.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
                  'https://c.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{ratio}.png',
                ],
                tileSize: 256,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxzoom: 19,
              },
            },
            layers: [
              {
                id: 'osm',
                type: 'raster',
                source: 'osm', // This must match the source key above
              },
            ],
            glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
          },
          zoom: 6,
        });
        /*
         * move the map to the bounds of the data
         */
        let minLng = Number.MAX_VALUE;
        let maxLng = Number.MIN_VALUE;
        let minLat = Number.MAX_VALUE;
        let maxLat = Number.MIN_VALUE;
        // Find the bounds of the data
        this.data.forEach(d => {
          const lng = parseFloat(d['long'].value);
          const lat = parseFloat(d['lat'].value);
          minLng = Math.min(minLng, lng);
          maxLng = Math.max(maxLng, lng);
          minLat = Math.min(minLat, lat);
          maxLat = Math.max(maxLat, lat);
        });
        const bounds = [
          [minLng, minLat],
          [maxLng, maxLat],
        ];
        map.fitBounds(bounds, {
          padding: 50,
          maxZoom: this.maxZoom,
          animate: false,
        });
        if (this.disableScrollZoom) {
          // disable map zoom when using scroll
          map.scrollZoom.disable();
        }
        if (this.displayMapNavigationControls) {
          // Add zoom and rotation controls to the map.
          map.addControl(new MapLibre.NavigationControl());
        }
        map.on('load', () => {
          map.addSource('places', {
            type: 'geojson',
            data: createGeoJSON(this.data, this.labelIndices),
          });
          const maxRadius = Math.max(...this.data.map(d => { var _a; return parseInt((_a = d['radius']) === null || _a === void 0 ? void 0 : _a.value) || 0; })); // get the max radius (if any)
          let colorSteps;
          if (this.colorScale.length < 2) {
            colorSteps = this.colorScale[0];
          }
          else {
            colorSteps = ['step', ['get', 'typeindex']];
            for (let i = 0; i < this.colorScale.length; i++) {
              if (i > 0)
                colorSteps.push(i);
              colorSteps.push(this.colorScale[i]);
            }
          }
          map.addLayer({
            id: 'circles',
            type: 'circle',
            source: 'places',
            paint: {
              'circle-color': colorSteps,
              'circle-radius': maxRadius ? ['interpolate', ['linear'], ['get', 'radius'], 0, this.radiusMin, maxRadius, this.radiusMax] : this.radiusMin,
              'circle-opacity': 0.8,
            },
          });
          //   Add popups to the markers
          const handleMarkerClick = e => {
            const coordinates = e.features[0].geometry.coordinates;
            // let html = `<ul>`;
            const popupData = e.features.map((feature) => {
              let children = [];
              try {
                children = JSON.parse(feature.properties.children);
              }
              catch (_a) { }
              const popupItem = {
                label: feature.properties.label,
                url: feature.properties.link,
                suffix: feature.properties.number,
                items: children.map(c => ({
                  label: c === null || c === void 0 ? void 0 : c.label,
                  url: c === null || c === void 0 ? void 0 : c.url,
                })),
              };
              return popupItem;
            });
            const el = document.createElement('geov-map-circles-popup');
            el.items = popupData;
            new MapLibre.Popup().setLngLat(coordinates).setDOMContent(el).setMaxWidth('340px').addTo(map);
          };
          // An on click event listener for the "circles" layer
          map.on('click', 'circles', handleMarkerClick);
          map.on('mouseenter', 'circles', () => {
            map.getCanvas().style.cursor = 'pointer';
          });
          map.on('mouseleave', 'circles', () => {
            map.getCanvas().style.cursor = '';
          });
        });
      }
    }
  }
  render() {
    return (h(Host, null, h("ion-card", { class: `legend ${this.ledgendExpanded ? '' : 'collapsed'}` }, h("ion-card-header", null, h("ion-button", { size: "small", class: "collapse-button", fill: "clear", onClick: () => (this.ledgendExpanded = !this.ledgendExpanded) }, h("ion-icon", { icon: this.ledgendExpanded ? closeOutline : informationCircleOutline, slot: "icon-only" }))), h("ion-list", null, this.labelIndices.map((type, i) => (h("ion-item", { lines: i === this.labelIndices.length - 1 ? 'none' : 'full' }, h("svg", { slot: "start", height: "1rem", width: "1rem" }, h("circle", { cx: "50%", cy: "50%", r: "50%", fill: this.colorScale[i % this.colorScale.length] })), h("ion-label", { class: "ion-text-wrap" }, type)))))), h("div", { class: "geov-map-circles-container", ref: el => (this.mapContainerEl = el) })));
  }
};
GeovYasguiMapCircles.style = geovYasguiMapCirclesCss;

export { GeovYasguiMapCircles as geov_yasgui_map_circles };

//# sourceMappingURL=geov-yasgui-map-circles.entry.js.map