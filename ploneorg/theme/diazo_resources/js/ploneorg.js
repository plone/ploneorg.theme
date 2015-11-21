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

    var paragraphs = $("p.truncate");
    $.each(paragraphs, function(index, paragraph){
      var height = 0, i = 1, words, text, previous_text, previous_previous_text;
      words = paragraph.textContent.split(/\s+/);
      // paragraph.text = "";
      if ($(paragraph).height() > 75) {
        while (height < 75) {
          previous_previous_text = previous_text;
          previous_text = text;
          text = paragraph.textContent = words.slice(0, i).join(' ');
          height = $(paragraph).height();
          i++;
        }
        paragraph.textContent = previous_previous_text + ' ...';
      }
    });

})(); // end scope.
