/*! */
/*! Ploneorg.theme */

// Self wrapping closure
// Set strict on our scope.
(function(){
    "use strict";

    $(".btn-search").click(function() {
       $(".section-search").slideToggle(
         "fast",
         function() {
            // TODO: only on slide open.
            $("#search").focus();
        });
    });

})(); // end scope.