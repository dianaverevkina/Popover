import Button from '../Button';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

global.document = dom.window.document;

document.body.innerHTML = '<div class="container"></div>';
const container = document.querySelector('.container');
const button = new Button(container);
button.bindToDOM();

test('widget should render', () => {
  const expected = Button.drawBtn();

  expect(container.innerHTML).toEqual(expected);
});

test('When click the button show popover', () => {
  button.button.click();

  const result = document.querySelector('.popover');

  expect(result).toBeTruthy();
});
