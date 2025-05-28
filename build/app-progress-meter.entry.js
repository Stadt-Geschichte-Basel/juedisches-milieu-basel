import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';

const appProgressMeterCss = ":host{display:block;--progrss-bar-color:var(--ion-color-step-200, #fff)}.circle{fill:none}.circle.segment-1,.circle.segment-2,.circle.segment-3{stroke:#7b3f27}.outline{stroke:var(--ion-color-step-500)}.label-1{fill:var(--ion-color-step-500);font-size:1.5rem}.label-2,.label-3{fill:var(--ion-color-step-500);font-size:.8rem}";

const AppProgressMeter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // radius of circle (scales to parent)
    this.r = 60;
    // stroke width for outlines
    this.strokeOuter = 10;
    // stroke width for indicator
    this.strokeInner = 6;
    // closing, 1 = semi-circle, 2= full circle
    this.closing = 1.6;
    // gap between label lines
    this.labelGap = 6;
    this.rotation = 0.5 - (this.closing - 1) / 4;
    this.cf = 2 * Math.PI * this.r;
    this.semi_cf = (this.closing * this.cf) / 2;
    this.semi_cf_1by3 = this.semi_cf / 3;
    this.semi_cf_2by3 = this.semi_cf_1by3 * 2;
    this.width = 2 * this.r + this.strokeOuter;
    this.height = this.width; // / this.closing;
    this.value = 9;
    this.maxVal = 12;
  }
  componentDidLoad() {
    // set radius
    [this.outlineCurves, this.low, this.avg, this.high, this.mask, this.outlineEnds].forEach(circle => {
      circle.setAttribute('r', this.r.toString());
    });
    // set inner stroke with
    [this.low, this.avg, this.high].forEach(e => e.setAttribute('stroke-width', this.strokeInner.toString()));
    // set outer stroke with
    [this.outlineCurves, this.mask, this.outlineEnds].forEach(e => e.setAttribute('stroke-width', this.strokeOuter.toString()));
    // set viewbox
    this.meter.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
    // set stroke dasharray for all circles except for mask
    this.outlineCurves.setAttribute('stroke-dasharray', this.semi_cf + ',' + this.cf);
    this.low.setAttribute('stroke-dasharray', this.semi_cf + ',' + this.cf);
    this.avg.setAttribute('stroke-dasharray', this.semi_cf_2by3 + ',' + this.cf);
    this.high.setAttribute('stroke-dasharray', this.semi_cf_1by3 + ',' + this.cf);
    this.outlineEnds.setAttribute('stroke-dasharray', 2 + ',' + (this.semi_cf - 2));
  }
  render() {
    var meter_value = this.semi_cf - (this.value / this.maxVal) * this.semi_cf;
    return (h(Fragment, null, h("svg", { ref: e => (this.meter = e) }, h("g", { style: { 'transform': 'scaleX(-1)', 'transform-origin': 'center' } }, h("g", { style: {
        'transform': `rotate(${this.rotation}turn)`,
        'transform-origin': 'center',
      } }, h("circle", { ref: e => (this.outlineCurves = e), class: "circle outline", cx: "50%", cy: "50%" }), h("circle", { ref: e => (this.low = e), class: "circle segment-1", cx: "50%", cy: "50%" }), h("circle", { ref: e => (this.avg = e), class: "circle segment-2", cx: "50%", cy: "50%" }), h("circle", { ref: e => (this.high = e), class: "circle segment-3", cx: "50%", cy: "50%" }), h("circle", { ref: e => (this.mask = e), class: "circle outline", cx: "50%", cy: "50%", "stroke-dasharray": meter_value + ',' + this.cf }), h("circle", { ref: e => (this.outlineEnds = e), class: "circle outline", cx: "50%", cy: "50%" }))), h("text", { class: "label-3", x: this.width / 2, y: this.height / 2 + this.labelGap * 3, "dominant-baseline": "middle", "text-anchor": "middle" }, "gel\u00F6st"), ' ', h("text", { class: "label-1", x: this.width / 2, y: this.height / 2 - this.labelGap, "dominant-baseline": "middle", "text-anchor": "middle" }, this.value, " / ", this.maxVal), ' ')));
  }
};
AppProgressMeter.style = appProgressMeterCss;

export { AppProgressMeter as app_progress_meter };

//# sourceMappingURL=app-progress-meter.entry.js.map