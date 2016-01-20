function App() {
  var me = this;

  App.prototype.init = function() { 
    window.randomize = function() {
      $('.radial-progress').attr('data-progress', Math.floor(Math.random() * 100));
    }
    setTimeout(window.randomize, 200);
    $('.radial-progress').click(window.randomize);
  };
}
$(function() {
  window.app = new App();
  window.app.init();
});
