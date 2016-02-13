/*! */
/*! Ploneorg.theme */


require([
    'jquery',
    '++theme++ploneorg/static/bootstrap',
    '++theme++ploneorg/static/featherlight'
], function($) {

  // DOM ready
  $(function() {
    "use strict";

    // Set listener on search buttons.
    $(".btn-search").click(function () {
      $(".sec-search").slideToggle(
        "fast",
        function () {
          // TODO: only on slide open.
          $("#search").focus();
        });
    });

    // Truncate paragraphs.
    var paragraphs = $("p.truncate");
    $.each(paragraphs, function (index, paragraph) {
      var height = 0, i = 1, words, text, previous_text, previous_previous_text;
      words = paragraph.textContent.split(/\s+/);
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

    // TODO: Something goes wrong with the Plone jQuery in combination
    // width Bootstrap js. Normally the (more menu) dropdown is activated
    // with `data-` attributes (no additional js required at all). This works in
    // the plain theme but not with the Plone jQuery. I guess this has to do with
    // the Plone 5 async way of loading modules.
    // Note that the hamburger menu works like it should.
    // So this is the (temp) fix:
    $(document).ready(function () {
      $(".dropdown-toggle").dropdown();
    });

    //STICKY FOOTER:
    //Calculates height of footer on page load and on page resizing,
    //Set body elements bottom padding to calculated height.
    //Set footer height to calculated height.
    function stickyFooter() {
      var footerHeight = $('.footer-doormat').outerHeight()+$('.footer-legal').outerHeight();
      $('body').css('padding-bottom', footerHeight);
      $('footer').css('height', footerHeight);
    }

    $(document).ready(function(){
      stickyFooter();
    });

    $( window ).resize(function() {
      stickyFooter();
    });

  });
});
