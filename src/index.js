import $ from 'jquery';
import MyPlugin from './MyPlugin';

$.fn.myPlugin = function(options) {
  let $this = $(this);

  $this.each((index, el) => {
    let $el = $(el);
    let plugin = new MyPlugin($el, options);
    $el.data('myPlugin', plugin);
  });

  return $this;
};
