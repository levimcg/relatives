/*
**  Nice little feature test here instead of using Modernizr
**  https://24ways.org/2015/putting-my-patterns-through-their-paces/
*/

var doc = document.body || document.documentElement;
var style = doc.style;

if ( style.webkitFlexWrap == '' || style.msFlexWrap == '' || style.flexWrap == '' ) {
  doc.className += "supports-flex";
} else {
    doc.className += " no-flex";
}
