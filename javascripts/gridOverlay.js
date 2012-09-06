/*

  gridOverlay Plugin

  Author: Steve Hickey, UI Designer & Front-End Developer
  https://twitter.com/stevehickeydsgn | http://stevehickeydesign.com/
  Company: Fresh Tilled Soil
  http://www.freshtilledsoil.com/ | https://github.com/javasteve99/gridOverlay

  Licensed for use under the WTFPL | http://en.wikipedia.org/wiki/WTFPL
  Free for all uses without attribution or credit. The author is not liable for
  anything that doesn't work or breaks. You're on your own, you've been warned.

*/

;(function() {

  "use strict";

  var options = {
    'page' : 940,             // set page width
    'column' : 60,            // set column width
    'gutter' : 20,            // set gutter width
    'baseline' : 24,          // set baseline height
    'initialDisplay' : 'none' // use string 'block' to have grid visible by default
  },
  grid = document.createElement('div');

  grid.id = 'gridOverlay';
  grid.style.cssText = 'display: ' + options.initialDisplay + '; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ' + options.page + 'px; margin: 0 auto; background-size: ' + ( options.column + options.gutter ) + 'px ' + options.baseline + 'px; background-image: -webkit-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + options.column + 'px, transparent ' + options.column + 'px), -webkit-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, rgba(255, 0, 0, 0.5) ' + options.baseline + 'px); background-image: -moz-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + options.column + 'px, transparent ' + options.column + 'px), -moz-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, rgba(255, 0, 0, 0.5) ' + options.baseline + 'px); background-image: -ms-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + options.column + 'px, transparent ' + options.column + 'px), -ms-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, rgba(255, 0, 0, 0.5) ' + options.baseline + 'px); background-image: -o-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + options.column + 'px, transparent ' + options.column + 'px), -o-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, rgba(255, 0, 0, 0.5) ' + options.baseline + 'px); background-image: linear, left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + options.column + 'px, transparent ' + options.column + 'px, linear, top, transparent ' + ( options.baseline - 1 ) + 'px, rgba(255, 0, 0, 0.5) ' + options.baseline + 'px;")';

  document.body.appendChild(grid);
  document.body.style.cssText = 'position: relative; height: auto; min-height: 100%';

  $(document).keydown(function (e) {
    if (e.keyCode === 71 && e.altKey) {
      $("#gridOverlay").toggle();
    }
  });

})();