import $ from 'jquery';

class MyPlugin {
  constructor($el, data = {}) {
    this.data = data;
    this.$el = $el;
    this.init();
  }
  init() {
    const $button = $('<button/>').html('MyButton');
    this.$el.html($button);
    this.addListeners();
  }
  addListeners() {
    this.$el.find('button').click(() => {
      alert('you clicked in my plugin button!');
    });
  }
}

export default MyPlugin;
