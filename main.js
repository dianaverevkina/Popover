/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Tooltip.js
class Tooltip {
  constructor() {
    this.tooltip = null;
  }
  createTooltip(element) {
    this.tooltip = document.createElement('div');
    this.tooltip.classList.add('popover');
    const tooltipContent = element.getAttribute('data-content');
    this.tooltip.innerHTML = `
      <div class="popover__arrow"></div>
      <h3 class="popover__header">
        Popover title
      </h3>
      <p class="popover__content">${tooltipContent}</p>
    `;
    const {
      top,
      left
    } = element.getBoundingClientRect();
    this.tooltip.style.top = `${top - 8}px`;
    this.tooltip.style.left = `${left + element.offsetWidth / 2}px`;
    document.body.append(this.tooltip);
  }
}
;// CONCATENATED MODULE: ./src/js/Button.js

class Button {
  constructor(container) {
    this.container = container;
    this.showTooltip = this.showTooltip.bind(this);
  }
  static drawBtn() {
    return `
      <button type="button" class="button" data-content="And here's some amazing content. It's very engaging. Right?">
        Click to toggle popover
      </button>
    `;
  }
  bindToDOM() {
    this.container.innerHTML = Button.drawBtn();
    this.button = this.container.querySelector('.button');
    this.popover = new Tooltip();
    this.button.addEventListener('click', this.showTooltip);
  }
  showTooltip(e) {
    e.preventDefault();
    this.tooltipEl = this.popover.tooltip;
    if (this.tooltipEl) {
      this.tooltipEl.remove();
      this.popover.tooltip = null;
      return;
    }
    this.popover.createTooltip(this.button);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector('.container');
const btn = new Button(container);
btn.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map