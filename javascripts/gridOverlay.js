/*

  Grid Overlay Plugin

  Author: Steve Hickey, UI Designer & Front-End Developer
  https://twitter.com/stevehickeydsgn | http://stevehickeydesign.com/
  Company: Fresh Tilled Soil
  http://www.freshtilledsoil.com/ | https://github.com/javasteve99/gridOverlay

  Licensed for use under the WTFPL | http://en.wikipedia.org/wiki/WTFPL
  Free for all uses without attribution or credit. The author is not liable for
  anything that doesn't work or breaks. You're on your own, you've been warned.

*/

/*
  @didgeoridoo modifications on 9/2/2012: Adding on/off functionality with a top-right corner button
  -Added buttonMarkup string to define absolutely-positioned on/off button
  -Added body.prepend(buttonMarkup) to insert new button into DOM
  -Added on("click") event handler for new button
  -Lightly tested in Firefox 14, Chrome 21, and Safari 6
*/


$('#gridOverlayOnOff').on("click", function(){
  $('#gridOverlay').toggle();
});

(function gridOverlay() {
  "use strict";

  var page = 940,
      column = 60,
      gutter = 20,
      baseline = 24,
      gridMarkup = '<div id="gridOverlay" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: ' + page +'px; margin: 0 auto; background-size: ' + (column+gutter) +'px ' + baseline +'px; background-image: -webkit-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), -webkit-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); background-image: -moz-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), -moz-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); background-image: -ms-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), -ms-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); background-image: -o-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), -o-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); background-image: linear, left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px, linear, top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px;"></div>',
      buttonMarkup = '<div id="gridOverlayOnOff" style="position: fixed; top: 0; right: 0; height: 12px; width: 12px; background-color: transparent; color: red; font-size: 12px; cursor: pointer;">||||</div>', 
      body = $('body');

  body.prepend(gridMarkup).css({
    'position': 'relative',
    'height': 'auto',
    'min-height': '100%'
  });

  body.prepend(buttonMarkup);

}());