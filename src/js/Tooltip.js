export default class Tooltip {
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

    const { top, left } = element.getBoundingClientRect();

    this.tooltip.style.top = `${top - 8}px`;
    this.tooltip.style.left = `${left + element.offsetWidth / 2}px`;

    document.body.append(this.tooltip);
  }
}
