import { r as registerInstance, i as h, F as Fragment } from './index-c3fe8f75.js';
import './index-38453636.js';
import { a as animationBuilderFadePages } from './page-animation-92d0ff95.js';
import { r as routerProvider } from './router-provider-4d2468af.js';
import { s as state } from './store-d393c555.js';
import { c as createAnimation } from './animation-f8742375.js';
import './ios.transition-01adfc50.js';
import './index-87867bd6.js';
import './helpers-2255292b.js';
import './index-150d1a25.js';
import './md.transition-156ee485.js';
import './cubic-bezier-67bf1f69.js';
import './index-89e0f6ee.js';
import './ionic-global-9cce5b06.js';
import './config-a7320371.js';
import './index-6dc853c2.js';
import './hardware-back-button-90902d55.js';
import './overlays-b26ddc71.js';
import './framework-delegate-865e6fcf.js';
import './index-bf616dc7.js';
import './_commonjsHelpers-2f226e38.js';
import './buildinfo-2b6b7774.js';

const pageIntroCss = ":host{display:block}.overflow-y-hidden{--overflow:hidden}.container{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column}.flash-container{display:none;transform:scale(0.01);flex-grow:1;position:relative;justify-content:center;align-items:center;font-size:200px;white-space:nowrap}.skip-intro-btn{position:relative;display:none}.go-btn{flex-grow:1;position:relative;justify-content:center;align-items:center}.container.playing .skip-intro-btn{display:block}.container.initial .go-btn{display:flex}.container.playing .go-btn,.container.ended .go-btn{display:none}";

const PageIntro = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disconnected = false;
    this.playing = 'initial';
  }
  async componentDidLoad() {
    if (state.playedIntro)
      this.skipIntro();
  }
  disconnectedCallback() {
    this.playing = 'initial';
    this.disconnected = true;
  }
  async playIntro() {
    this.playing = 'playing';
    this.flash1.stop();
    this.flash2.stop();
    this.flash3.stop();
    await this.flash1.play();
    await this.flash2.play();
    await this.flash3.play();
    this.playing = 'ended';
    state.playedIntro = true;
    this.navigateToPuzzle();
  }
  skipIntro() {
    this.flash1.stop();
    this.flash2.stop();
    this.flash3.stop();
    this.playing = 'ended';
    state.playedIntro = true;
    this.navigateToPuzzle();
  }
  navigateToPuzzle() {
    if (!this.disconnected)
      routerProvider.ionRouterElement.push('/puzzle', 'forward', animationBuilderFadePages);
  }
  render() {
    return (h(Fragment, null, h("ion-content", { class: "ion-padding overflow-y-hidden", id: "main-menu" }, h("div", { class: `container ${this.playing}` }, h("div", { class: "go-btn" }, h("ion-button", { fill: "clear", size: "large", onClick: () => this.playIntro() }, "Los geht's", h("ion-icon", { slot: "end", name: "chevron-forward-outline" }))), h(Fragment, null, h("div", { class: "flash-container hidden", ref: e => (this.flash1 = this.createShowHideAnimation(e)) }, "Das j\u00FCdische Basel"), h("div", { class: "flash-container hidden", ref: e => (this.flash2 = this.createShowHideAnimation(e)) }, "1850 bis 1914"), h("div", { class: "flash-container hidden", ref: e => (this.flash3 = this.createShowHideAnimation(e)) }, "in zw\u00F6lf Teilen"), h("ion-button", { fill: "clear", class: "skip-intro-btn", ref: e => (this.skipBtn = e), onClick: () => this.skipIntro() }, "Intro \u00FCberspringen", h("ion-icon", { slot: "end", name: "chevron-forward-outline" })))))));
  }
  createShowAnimation(el) {
    return createAnimation('show')
      .addElement(el)
      .duration(1500)
      .keyframes([
      { offset: 0, opacity: '0', display: 'block' },
      { offset: 1, opacity: '1', display: 'block' },
    ]);
  }
  createShowHideAnimation(el) {
    return createAnimation('show-hide')
      .addElement(el)
      .duration(2500)
      .beforeStyles({ display: 'flex' })
      .afterStyles({ display: 'none' })
      .keyframes([
      { offset: 0, opacity: '0' },
      { offset: 0.2, opacity: '1' },
      { offset: 0.4, opacity: '1' },
      { offset: 0.8, opacity: '0', transform: 'scale(1)' },
      { offset: 1, opacity: '0', transform: 'scale(1)' },
    ]);
  }
};
PageIntro.style = pageIntroCss;

export { PageIntro as page_intro };

//# sourceMappingURL=page-intro.entry.js.map