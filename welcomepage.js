const nunjucks = require('nunjucks');
const jetpack = require('fs-jetpack');

var InitializeWelcome = function(){
  var file = jetpack.read('modules/welcomepage/welcome.html');
  var html = nunjucks.renderString(file, {author:'tibit'});
  jQuery('body').prepend(html);
  document.title = 'Nucleus - Welcome';
}
InitializeWelcome();
