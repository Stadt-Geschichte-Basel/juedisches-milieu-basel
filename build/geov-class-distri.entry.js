import { r as registerInstance, i as h, m as Host, n as getElement } from './index-c3fe8f75.js';
import { i as isNode } from './isNode-e6f1444c.js';
import { i as importPlotlyBasic } from './importPlotlyBasic-6af2f060.js';
import { s as sparqlJson } from './sparqlJson-9ef8bff0.js';

const geovClassDistriCss = ":host{display:block;position:relative}.loading{display:flex;align-items:center;justify-content:center;background-color:var(--ion-color-light-tint, #fafafa)}";

const chartColors = [
  '#322659',
  '#44337A',
  '#553C9A',
  '#6B46C1',
  '#805AD5',
  '#9F7AEA',
  '#B794F4',
  '#D6BCFA',
  '#E9D8FD',
  '#FAF5FF',
  '#E9D8FD',
  '#D6BCFA',
  '#B794F4',
  '#9F7AEA',
  '#805AD5',
  '#6B46C1',
  '#553C9A',
  '#44337A',
];
const qrClassesCount = () => `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  SELECT (group_concat(?class;separator=", ") as ?classnames) (Max(?classcount) as ?classcounts)
  WHERE {
      {
          SELECT ?classuri (count(?entity) as ?classcount)
          WHERE {
              ?entity a ?classuri .
          }
          GROUP BY ?classuri
      }
      ?classuri rdfs:label ?class
  }
  GROUP BY ?classuri
  ORDER by DESC(?classcounts)
`;
const GeovClassDistri = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sparqlEndpoint = undefined;
    this.width = undefined;
    this.height = undefined;
    this.loading = undefined;
  }
  async componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.loading = true;
      // Load plotly script
      const Plotly = await importPlotlyBasic();
      // Send the request to the provided sparql endpoint
      sparqlJson(this.sparqlEndpoint, qrClassesCount()).then(res => {
        var _a;
        // Parse the response
        const response = (_a = res === null || res === void 0 ? void 0 : res.results) === null || _a === void 0 ? void 0 : _a.bindings;
        const labels = response.map(elt => elt.classnames.value);
        const values = response.map(elt => parseInt(elt.classcounts.value));
        // Prepare colors
        const colors = [];
        for (let i = 0; i < values.length; i++) {
          colors.push(chartColors[i % chartColors.length]);
        }
        // Chart data, shape, and parameters
        const plotlyData = [
          {
            labels: labels,
            values: values,
            type: 'pie',
            textinfo: 'label+percent',
            textposition: 'inside',
            marker: { colors: colors },
          },
        ];
        // Chart Layout - Prepare
        const classNb = values.length;
        const entNb_x1000 = Math.round(values.reduce((a, b) => a + b, 0) / 1000);
        // Chart Layout - Set
        const layout = {
          width: this.width,
          height: this.height,
          title: `Distribution of ${classNb} classes (${entNb_x1000}k entities)`,
          showlegend: false,
        };
        // Draw the chart
        if (Plotly)
          Plotly.newPlot(this.el, plotlyData, layout);
        this.loading = false;
      });
    }
  }
  render() {
    return (h(Host, null, this.loading && (h("div", { style: { width: this.width + 'px', height: this.height + 'px' }, class: "loading" }, h("ion-spinner", { name: "dots" })))));
  }
  get el() { return getElement(this); }
};
GeovClassDistri.style = geovClassDistriCss;

export { GeovClassDistri as geov_class_distri };

//# sourceMappingURL=geov-class-distri.entry.js.map