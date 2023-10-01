import Tooltip from './Tooltip';

export default class Button {
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
