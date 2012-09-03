/*

  Grid Overlay JQuery Plugin

  Author: Steve Hickey, UI Designer & Front-End Developer
  https://twitter.com/stevehickeydsgn | http://stevehickeydesign.com/
  Company: Fresh Tilled Soil
  http://www.freshtilledsoil.com/ | https://github.com/javasteve99/gridOverlay

  Licensed for use under the WTFPL | http://en.wikipedia.org/wiki/WTFPL
  Free for all uses without attribution or credit. The author is not liable for
  anything that doesn't work or breaks. You're on your own, you've been warned.

*/

/*
  @didgeoridoo modifications on 9/3/2012: Freed from jQuery tyranny! 
  In doing so, also probably broke some cross-browser functionality. C'est la vie.
*/

  (function gridOverlay() {
  "use strict";

  var page = 940,
      column = 60,
      gutter = 20,
      baseline = 24;

  var grid = document.createElement('div');
  grid.id = 'gridOverlay';
  grid.style.cssText = '\
      display: block; \
      position: absolute; \
      top: 0; \
      right: 0; \
      bottom: 0; \
      left: 0; \
      width: ' + page +'px; \
      margin: 0 auto; \
      background-size: ' + (column+gutter) +'px ' + baseline +'px; \
      background-image: \
        -webkit-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), \
        -webkit-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); \
      background-image: \
        -moz-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), \
        -moz-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); \
      background-image: \
        -ms-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), \
        -ms-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); \
      background-image: \
        -o-linear-gradient(left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px), \
        -o-linear-gradient(top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px); \
      background-image: \
        linear, left, rgba(255, 0, 0, 0.25) 0, rgba(255, 0, 0, 0.25) ' + column +'px, transparent ' + column +'px, linear, top, transparent ' + (baseline-1) +'px, rgba(255, 0, 0, 0.5) ' + baseline +'px;")';


  var toggleButton = document.createElement('a');
  toggleButton.id = 'gridToggle';
  toggleButton.setAttribute('accesskey', 'g');
  toggleButton.addEventListener('click', function(){
    if(grid.style.display=='block'){
      grid.style.display='none';
    } else {
      grid.style.display='block';
    }
  });

  document.body.appendChild(grid);
  document.body.appendChild(toggleButton);

}());



