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
    'page' : 940,                                   // set page width
    'column' : 60,                                  // set column width
    'columnColor' : 'rgba(255, 0, 0, 0.25)',        // set column color
    'gutter' : 20,                                  // set gutter width
    'gutterColor' : 'transparent',                  // set gutter color
    'baseline' : 24,                                // set baseline height
    'baselineColor' : 'rgba(255, 255, 255, 0.5)',   // set baseline color
    'initialDisplay' : 'none'                       // use 'block' to have grid visible by default
  },
  grid = document.createElement('div');

  grid.id = 'gridOverlay';
  grid.style.cssText = 'display: ' + options.initialDisplay + '; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ' + options.page + 'px; margin: 0 auto; background-size: ' + ( options.column + options.gutter ) + 'px ' + options.baseline + 'px; background-image: -webkit-linear-gradient(left, ' + options.columnColor + ' 0, ' + options.columnColor + ' ' + options.column + 'px, ' + options.gutterColor + ' ' + options.column + 'px), -webkit-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baseline + 'px); background-image: -moz-linear-gradient(left, ' + options.columnColor + ' 0, ' + options.columnColor + ' ' + options.column + 'px, ' + options.gutterColor + ' ' + options.column + 'px), -moz-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baseline + 'px); background-image: -ms-linear-gradient(left, ' + options.columnColor + ' 0, ' + options.columnColor + ' ' + options.column + 'px, ' + options.gutterColor + ' ' + options.column + 'px), -ms-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baseline + 'px); background-image: -o-linear-gradient(left, ' + options.columnColor + ' 0, ' + options.columnColor + ' ' + options.column + 'px, ' + options.gutterColor + ' ' + options.column + 'px), -o-linear-gradient(top, transparent ' + ( options.baseline - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baseline + 'px); background-image: linear, left, ' + options.columnColor + ' 0, ' + options.columnColor + ' ' + options.column + 'px, ' + options.gutterColor + ' ' + options.column + 'px, linear, top, transparent ' + ( options.baseline - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baseline + 'px;")';

  document.body.appendChild(grid);
  document.body.style.cssText = 'position: relative; height: auto; min-height: 100%';

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 71 && e.altKey) {
      var grid = document.getElementById('gridOverlay');
      if (grid.style.display === 'none') {
        grid.style.display = 'block';
      } else {
        grid.style.display = 'none';
      }
    }
  });

})();