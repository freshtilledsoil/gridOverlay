/*  gridOverlay Plugin

    Author: Steve Hickey, UI Designer & Front-End Developer | https://twitter.com/stevehickeydsgn | http://stevehickeydesign.com/
    Company: Fresh Tilled Soil | http://www.freshtilledsoil.com/ | https://github.com/freshtilledsoil/gridOverlay

    Licensed for use under the WTFPL | http://en.wikipedia.org/wiki/WTFPL -- Free for all uses without attribution or credit.
    The author is not liable for anything that doesn't work or breaks. You're on your own, you've been warned.
*/

/*jshint multistr:true */

;(function() {

  "use strict";

  var options = {
    'maxPageWidth' :     '940px',                       // set page width (added as max-width for flexible grids)
    'columnWidth' :      '60px',                        // set column width
    'gutterWidth' :      '20px',                        // set gutter width
    'baselineHeight' :    24,                           // set baseline height (converts to pixels for now)
    'columnColor' :      'rgba(255, 0, 0, 0.25)',       // set column color
    'baselineColor' :    'rgba(255, 255, 255, 0.5)',    // set baseline color
    'initialDisplay' :   'block'                         // use 'block' to have grid visible by default
  },
  columnPercentage = ( parseInt(options.columnWidth, 10) / ( parseInt(options.columnWidth, 10) + parseInt(options.gutterWidth, 10) ) ) * 100 + '%',
  backgroundSize = ( ( parseInt(options.columnWidth, 10) / parseInt(options.maxPageWidth, 10) ) + ( parseInt(options.gutterWidth, 10) / parseInt(options.maxPageWidth, 10) ) ) * 100 + '%',
  columnGradient = options.columnColor + ' 0, ' + options.columnColor + ' ' + columnPercentage + ', transparent ' + columnPercentage,
  baselineGradient = ( options.baselineHeight - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baselineHeight + 'px',
  grid = document.createElement('div');
  grid.id = 'gridOverlay';
  grid.style.cssText = '\
    display: ' + options.initialDisplay + '; \
    position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: 0 auto; width: 100%; \
    max-width: ' + options.maxPageWidth + '; \
    background-size: ' + backgroundSize + ' ' + options.baselineHeight + 'px; \
    background-image: -webkit-linear-gradient(left, ' + columnGradient + '), -webkit-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:    -moz-linear-gradient(left, ' + columnGradient + '),    -moz-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:     -ms-linear-gradient(left, ' + columnGradient + '),     -ms-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:      -o-linear-gradient(left, ' + columnGradient + '),      -o-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:                 linear, left, ' + columnGradient + ',                  linear, top, transparent ' + baselineGradient + ');';

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