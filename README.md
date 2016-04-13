# nucleus
Nucleus Game Studio is a tool for making high quality games fast.

It is open source and for now it is also free.

Currently it is under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.]( http://creativecommons.org/licenses/by-nc-nd/4.0/)

#DevBlog on Medium
[Nucleus Game Studio Blog](https://medium.com/nucleus-game-studio-for-monkey2)

#Still in alpha
Nucleus has just begun forming. It is now being built to support the Monkey2 programming language, which is a language specially built to make 2D games.

##Modular from the ground up
Everything is modules in Nucleus. Even the menu, the welcome screen is modules being dynamically run. Allowing for super cool developer experience since you can edit the editor live. You can also add modifications, test them out and easily share them with others.

###Welcome screen
Here is how the intro screen looks like:
```javascript
const nunjucks = require('nunjucks');
const jetpack = require('fs-jetpack');

var InitializeWelcome = function(){
  var file = jetpack.read('modules/welcomepage/welcome.html');
  var html = nunjucks.renderString(file, {author:'tibit'});
  jQuery('body').prepend(html);
  document.title = 'Nucleus - Welcome';
}
InitializeWelcome();
´´´


In addition the rest is .html code found in, well the welcome.html file :)

##Got a question?
Feel free to get in touch! Post a github iuues, private message, or contact me on medium.
