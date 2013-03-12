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
    'maxPageWidth' :     '940px',                       // set overlay width to match page width (as max-width for flexible grids)
    'columnWidth' :      '60px',                        // set column width in px, em or %
    'columnCount' :       12,                           // set column count
    'columnColor' :      'rgba(255, 0, 0, 0.25)',       // set column color
    'gutterWidth' :      '20px',                        // set gutter width in px, em or %
    'baselineHeight' :    24,                           // set baseline height (requires pixels for now)
    'baselineColor' :    'rgba(255, 255, 255, 0.5)',    // set baseline color
    'initialDisplay' :   'block'                        // 'block' will show grid on load; 'none' will hide on load
  },

  // parse integers from option variables
  maxPageWidthInt = parseInt(options.maxPageWidth, 10),
  columnWidthInt = parseInt(options.columnWidth, 10),
  gutterWidthInt = parseInt(options.gutterWidth, 10),

  // calculate column and gutter widths in percentages
  columnPercentage = ( columnWidthInt / maxPageWidthInt ) * 100 + '%',
  gutterPercentage = ( gutterWidthInt / maxPageWidthInt ) * 100 + '%',

  // create baseline grid gradient
  baselineGradient = ( options.baselineHeight - 1 ) + 'px, ' + options.baselineColor + ' ' + options.baselineHeight + 'px',

  // create gridOverlay element
  gridOverlay = document.createElement('div');

  // assign id to gridOverlay element
  gridOverlay.id = 'gridOverlay';

  // style gridOverlay element
  gridOverlay.style.cssText = '\
    display: ' + options.initialDisplay + '; \
    position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: 0 auto; width: 100%; \
    max-width: ' + options.maxPageWidth + '; \
    background-size: 100% ' + options.baselineHeight + 'px; \
    background-image: -webkit-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:    -moz-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:     -ms-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:      -o-linear-gradient(top, transparent ' + baselineGradient + '); \
    background-image:                 linear, top, transparent ' + baselineGradient + ');';

  // add grid container to page
  document.body.appendChild(gridOverlay);

  // add columns to page and style them
  for (var i = 0; i < options.columnCount; i++) {
    var column = document.createElement('div');
    gridOverlay.appendChild(column);
    column.style.cssText = '\
      display: block; float: left; position: relative; height: auto; min-height: 100%; \
      background-color: ' + options.columnColor + '; \
      margin-right: ' + gutterPercentage + '; \
      width: ' + columnPercentage + ';';
  };

  // remove right margin from last column
  gridOverlay.lastChild.style.marginRight = 0;

  // style body to prevent scrolling grid and match full page height
  document.body.style.cssText = 'position: relative; height: auto; min-height: 100%';

  // enable toggling of grid visibility with Option + G (Mac) or Alt + G (PC)
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 71 && e.altKey) {
      if (gridOverlay.style.display === 'none') {
        gridOverlay.style.display = 'block';
      } else {
        gridOverlay.style.display = 'none';
      }
    }
  });

})();
