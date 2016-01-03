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

/*
**  Hides the images once the DOM is ready so that we can
**  fade them in later
*/
$(document).ready(function() {
    $(".post-teaser img, .post-content img").hide();
});

// Fade in the images once they are loaded
$(window).on("load", function() {
    $(".post-teaser img").each(function(index) {
        $(this).delay(250 * index).fadeIn("slow");
    });
});

$(window).on("load", function() {
    $(".post-content img").fadeIn("slow");
});
