import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';
import { z as arrowBackOutline, A as chevronBackOutline, B as chevronForwardOutline, C as arrowForwardOutline } from './index-8d6f5b95.js';

const geovPaginatorCss = ":host{display:flex;align-items:center;flex-direction:row;flex-wrap:wrap}ion-item{--inner-padding-end:var(--inner-padding-end)}";

const GeovPaginator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageChanged = createEvent(this, "pageChanged", 7);
    this.hidePageSize = undefined;
    this.length = 0;
    this.pageIndex = 0;
    this.pageSize = 25;
    this.showFirstLastButtons = true;
    this.color = undefined;
  }
  render() {
    // number of pages
    const pageCount = Math.floor((this.length - 1) / this.pageSize) + 1;
    const isFirstPage = this.pageIndex <= 0;
    const isLastPage = this.pageIndex + 1 >= pageCount;
    const firstShownItem = this.pageIndex * this.pageSize + 1;
    const lastShownItem = this.pageIndex * this.pageSize + this.pageSize;
    return (h(Host, null, h("ion-item", { color: this.color, lines: "none" }, !this.hidePageSize && (h("ion-note", null, firstShownItem, " \u2013\u00A0", lastShownItem <= this.length ? lastShownItem : this.length, " of ", this.length)), h("ion-buttons", null, this.showFirstLastButtons && (h("ion-button", { disabled: isFirstPage, onClick: () => this.changePageTo(0) }, h("ion-icon", { slot: "icon-only", icon: arrowBackOutline }))), h("ion-button", { disabled: isFirstPage, onClick: () => this.changePageTo(this.pageIndex - 1) }, h("ion-icon", { slot: "icon-only", icon: chevronBackOutline })), h("ion-button", { disabled: isLastPage, onClick: () => this.changePageTo(this.pageIndex + 1) }, h("ion-icon", { slot: "icon-only", icon: chevronForwardOutline })), this.showFirstLastButtons && (h("ion-button", { disabled: isLastPage, onClick: () => this.changePageTo(pageCount - 1) }, h("ion-icon", { slot: "icon-only", icon: arrowForwardOutline })))))));
  }
  changePageTo(newPageIndex) {
    const previousPageIndex = this.pageIndex;
    this.pageIndex = newPageIndex;
    this.pageChanged.emit({
      length: this.length,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      previousPageIndex,
    });
  }
};
GeovPaginator.style = geovPaginatorCss;

export { GeovPaginator as geov_paginator };

//# sourceMappingURL=geov-paginator.entry.js.map