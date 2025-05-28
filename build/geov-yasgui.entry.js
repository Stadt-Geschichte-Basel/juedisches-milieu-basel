import { r as registerInstance, i as h, m as Host, n as getElement } from './index-c3fe8f75.js';
import { i as isNode } from './isNode-e6f1444c.js';
import { m as mapOutline, s as settingsOutline, a as closeOutline } from './index-8d6f5b95.js';

/**
 * Load and return plotly library from CDN in browsers.
 * In node server environment returns null.
 * @returns Yasgui (in browser) or null (in server)
 */
const importYasgui = async () => new Promise((resolve, reject) => {
  // if we are on a node server resolve with null
  if (isNode())
    return resolve(null);
  // if Yasgui is already defined resolve it
  if ('Yasgui' in window) {
    return resolve(window['Yasgui']);
  }
  // create new script element
  const script = document.createElement('script');
  // register on load callback and resolve Yasgui
  script.onload = () => resolve(window['Yasgui']);
  // register on error callback and reject
  script.onerror = reject;
  // set url
  script.src = 'https://cdn.jsdelivr.net/npm/@triply/yasgui@4.2.28/build/yasgui.min.js';
  // append script to load Yasgui JS from CDN to document
  document.body.appendChild(script);
  // create new link element
  const link = document.createElement('link');
  link.href = 'https://cdn.jsdelivr.net/npm/@triply/yasgui@4.2.28/build/yasgui.min.css';
  link.rel = 'stylesheet';
  link.type = 'text/css';
  // append link to load Yasgui CSS from CDN to document
  document.body.appendChild(link);
});

function generatePluginMapCircles(config) {
  return class PluginMapCircles {
    constructor(yasr) {
      // A priority value. If multiple plugin support rendering of a result, this value is used
      // to select the correct plugin
      this.priority = 10;
      // Whether to show a select-button for this plugin
      this.hideFromSelection = false;
      this.label = 'Map Circles';
      this.expectedKeys = [
        {
          name: 'radius',
          required: false,
          customValidator: val => {
            if (Number(val === null || val === void 0 ? void 0 : val.value) > 0)
              return;
            return new Set(['must be parsable to a number, and bigger than 0']);
          },
        },
        {
          name: 'number',
          required: false,
          customValidator: val => {
            if (!isNaN(Number(val === null || val === void 0 ? void 0 : val.value)))
              return;
            return new Set(['must be parsable to a number']);
          },
        },
        {
          name: 'long',
          required: true,
          customValidator: val => {
            const parsed = Number(val === null || val === void 0 ? void 0 : val.value);
            if (parsed >= -180 && parsed <= 180)
              return;
            return new Set(['must be parsable to a number in the range -180 and +180']);
          },
        },
        {
          name: 'lat',
          required: true,
          customValidator: val => {
            const parsed = Number(val === null || val === void 0 ? void 0 : val.value);
            if (parsed >= -90 && parsed <= 90)
              return;
            return new Set(['must be parsable to a number in the range -90 and +90']);
          },
        },
      ];
      this.yasr = yasr;
    }
    // Draw the result set. This plugin creates a <geov-yasgui-map-circles/ data=[...]>
    draw() {
      const elValidation = document.createElement('geov-yasgui-data-validation');
      const data = this.yasr.results.getBindings();
      elValidation.data = data;
      elValidation.expectedKeys = this.expectedKeys;
      this.yasr.resultsEl.appendChild(elValidation);
      this.yasr.resultsEl.classList.add('ion-padding');
      // listen for the validation result
      elValidation.addEventListener('validationCompleted', (isValid) => {
        var _a;
        // if data is valid ...
        if (isValid.detail) {
          // create the timeline element
          const elVisual = document.createElement('geov-yasgui-map-circles');
          elVisual.data = data;
          elVisual.style.height = (_a = config === null || config === void 0 ? void 0 : config.mapHeight) !== null && _a !== void 0 ? _a : '400px';
          for (const key in config) {
            elVisual[key] = config[key];
          }
          // remove validation element
          this.yasr.resultsEl.classList.remove('ion-padding');
          this.yasr.resultsEl.removeChild(elValidation);
          // append timeline element
          this.yasr.resultsEl.appendChild(elVisual);
        }
      });
    }
    // A required function, used to indicate whether this plugin can draw the current
    // resultset from yasr
    canHandleResults() {
      return !this.yasr.results.hasError();
    }
    // A required function, used to identify the plugin, works best with an svg
    getIcon() {
      const textIcon = document.createElement('ion-icon');
      textIcon.icon = mapOutline;
      return textIcon;
    }
  };
}

const geovYasguiCss = "geov-yasgui{position:relative;display:block;width:100%;height:100%}geov-yasgui .toggle-button{position:absolute;z-index:1000;right:var(--ion-padding, 1rem);top:var(--ion-padding, 1rem)}geov-yasgui.toggling .tabsList,geov-yasgui.toggling .yasr_header,geov-yasgui.toggling .yasqe .resizeWrapper,geov-yasgui.toggling .yasqe .CodeMirror,geov-yasgui.toggling .controlbar{transition:all .2s ease-in;overflow:hidden}geov-yasgui .tabsList.collapsed,geov-yasgui .yasr_header.collapsed,geov-yasgui .yasqe.collapsed .resizeWrapper,geov-yasgui .controlbar.collapsed,geov-yasgui .yasqe.collapsed .CodeMirror{transition:all .2s ease-out;overflow:hidden}geov-yasgui .tabsList.collapsed,geov-yasgui .yasr_header.collapsed,geov-yasgui .yasqe.collapsed .resizeWrapper{height:0px}geov-yasgui .controlbar.collapsed{max-height:0px}geov-yasgui .yasqe.collapsed .CodeMirror{height:0px !important;border:none;min-height:0px}geov-yasgui .yasr.collapsed{margin-top:0px}";

const GeovYasgui = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // True during 200ms of toggling
    this.toggling = false;
    this.plugins = new Set();
    this.collapse = false;
    this.defaultPlugin = 'table';
    this.pluginOrder = ['table', 'response'];
    this.pluginConfig = {};
    this.queryTabs = [];
    this.hideYasqueToggle = false;
  }
  async componentWillLoad() {
    this.Y = await importYasgui();
  }
  componentDidLoad() {
    // If we are in a browser
    if (!isNode()) {
      this.setupYasr();
      localStorage.removeItem('yagui__config');
      if (!this.el)
        return;
      const yasgui = new this.Y(this.el, {});
      // close initial tab
      if (this.queryTabs.length)
        yasgui.getTab().close();
      // add tabs
      const tabDefaults = this.Y.Tab.getDefaults();
      this.queryTabs.forEach((q, i) => {
        var _a;
        yasgui.addTab(i === 0, Object.assign(Object.assign({}, tabDefaults), { id: 'tab' + i, requestConfig: Object.assign(Object.assign({}, tabDefaults.requestConfig), { endpoint: q.sparqlEndpoint }), name: q.name, yasqe: { value: q.query }, yasr: Object.assign(Object.assign({}, tabDefaults.yasr), { settings: {
              selectedPlugin: (_a = q.selectedPlugin) !== null && _a !== void 0 ? _a : this.defaultPlugin,
            } }) }), { avoidDuplicateTabs: true });
      });
      // execute query of active tab
      yasgui.getTab().query();
      // set Yasque visibility
      this.setYasqueVisibility();
    }
  }
  toggleVisiblity() {
    if (this.toggling)
      return;
    this.collapse = !this.collapse;
    this.setYasqueVisibility();
  }
  async setYasqueVisibility() {
    this.toggling = true;
    this.el.classList.add('toggling');
    const elementsToSwitchVis = this.el.querySelectorAll('.yasr, .yasr_header, .yasqe, .tabsList, .controlbar');
    elementsToSwitchVis.forEach(ele => {
      this.collapse ? ele.classList.add('collapsed') : ele.classList.remove('collapsed');
    });
    await new Promise(res => setTimeout(res, 200));
    this.el.classList.remove('toggling');
    this.toggling = false;
  }
  /**
   * Setup yasr configuration
   */
  setupYasr() {
    this.registerCustomPlugins();
    this.setPluginOrder();
  }
  /**
   * Register custom yasr plugins
   */
  registerCustomPlugins() {
    var _a;
    const customPlugins = {
      mapCircles: generatePluginMapCircles(this.pluginConfig.mapCircles),
    };
    (_a = this.plugins) === null || _a === void 0 ? void 0 : _a.forEach(plugin => {
      if (!!customPlugins[plugin])
        this.Y.Yasr.registerPlugin(plugin, customPlugins[plugin]);
    });
  }
  /**
   * Set yasr plugin order
   */
  setPluginOrder() {
    this.Y.Yasr.defaults.pluginOrder = this.pluginOrder;
  }
  render() {
    return (h(Host, null, !this.hideYasqueToggle && (h("ion-button", { class: "toggle-button", size: "small", onClick: () => this.toggleVisiblity(), title: this.collapse ? 'Show query' : 'Hide query' }, this.collapse ? h("ion-icon", { slot: "icon-only", icon: settingsOutline }) : h("ion-icon", { slot: "icon-only", icon: closeOutline })))));
  }
  get el() { return getElement(this); }
};
GeovYasgui.style = geovYasguiCss;

export { GeovYasgui as geov_yasgui };

//# sourceMappingURL=geov-yasgui.entry.js.map