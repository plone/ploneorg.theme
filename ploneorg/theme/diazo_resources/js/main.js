// Albert - footer 5 columns for no-csscolumns support
$( document ).ready(function() {
  $('.no-csscolumns .five-col dt').unwrap();
  $('.no-csscolumns dt').each(function(){
      $(this).nextUntil('dt').andSelf().wrapAll('<dl class="col-no-css"/>');
  });
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    // increaseArea: '20%' // optional
  });
  // Disable iCheck on special fields...
  $('input[type=radio][value=replace]').on('ifChecked', function(event){
    target_id = $(this).attr('id').replace('replace', 'input');
    document.getElementById(target_id).disabled=false;
  });
  $('input[type=radio][value=replace]').on('ifUnchecked', function(event){
    target_id = $(this).attr('id').replace('replace', 'input');
    document.getElementById(target_id).disabled=true;
  });

  // $("#slider").zAccordion({
  //   width: 1140,
  //   speed: 600,
  //   slideClass: "slider",
  //   slideWidth: 800,
  //   height: 400
  // });

});


/* Writen by L.Huiskes ZestSoftware */ 
(function(){
    "use strict";

    /* A debounced resize handler that fires ONLY when the width changes */
    function resizeWidthOnly(a,b) {
      var c = [window.innerWidth];
      return onresize = function() {
        var d = window.innerWidth,
            e = c.length;
        c.push(d);
        if(c[e]!==c[e-1]){
          clearTimeout(b);
          b = setTimeout(a, 500);
        }
      }, a;
    };

    // Set timer for the auto play Carousel
    var timers = [];

    function Carousel() {

      // Init settings
      var speed = 600;
      var interval = 7000;

      // Slide li
      var slides = $('#accordion li')

      $('#accordion').removeAttr('width');
      $('#accordion').removeAttr('height');

      // Container width
      var total_width = $('#accordion').width();
      // How many slides do we got
      var slide_length = slides.length;
      // How much is 10% for the close slides
      var width_close_slide = Math.floor(total_width / 10);

      // width for the active slide = rest width - 1 closed slide since its open
      var width_close_slides = Math.floor(width_close_slide);
      var width_active_slide = Math.floor(total_width - (width_close_slides * (slide_length - 1) ));

      // if screen is smaller then 768 (mobile only)
      if ($(window).width() < 768) {
        // Remove closed slides
        var width_close_slides = 0;
        // Set the active slide on full width
        var width_active_slide = total_width;
      }

      // Set active state on first slide
      slides.first().addClass("active");
      var slide_active = $('#accordion li.active')

      $('#accordion img').width(width_active_slide);

      // Set width's on the li
      slides.not(".active").width(width_close_slides);
      // Set width on the active slide
      slide_active.width(width_active_slide);

      $(slides).click(function() {
        // If this is already the active stop
        if ($(this).hasClass("active")){
          return false
        }

        $(slides).not($(this)).animate({ width: width_close_slides + 'px' }, speed);
        $(this).animate({ width: width_active_slide + 'px' }, speed);

        // Set new classes and width's
        $('#accordion li.active').removeClass("active");
        $(this).addClass("active");

        // Set new var
        var slide_active = $('#accordion li.active');

      });

      // Set controls for mobile
      $('.carousel-control.right').click(function(){
        slide_to_next();
      });
      $('.carousel-control.left').click(function(){
        slide_to_prev();
      });

      // Slide to next.
      function slide_to_next() {
        var slide_active = $('#accordion li.active');
        var index = $(slides).index(slide_active) + 1;
        if (index < $('#accordion li').length){
          $(slide_active).next().click();
        }else{
          $(slides).first().click();
        }
      }

      // Slide to prev.
      function slide_to_prev() {
        var slide_active = $('#accordion li.active');
        var index = $(slides).index(slide_active) + 1;
        if (index === 1){
          $(slides).last().click();
        }else{
          $(slide_active).prev().click();
        }
      }

      // Store timer in a global var. So it can be removed.
      function remove_timers() {
        for (var i = 0; i < timers.length; i++) {
          clearInterval(timers[i]);
        }
      }

      // Set a timer.
      function set_timer() {
        timers.push(setInterval(slide_to_next, interval));
      }

      // Remove all old timers and set a new one.
      remove_timers();
      set_timer();

      // When Mouse enter on the accordion stop autoplay
      $( "#accordion" ).mouseenter(function() {
        remove_timers();
      });
      // When Mouse leave set a new timer to start the autoplay
      $( "#accordion" ).mouseleave(function() {
        set_timer();
      });

    };

  // Init and resize.
  resizeWidthOnly(function () {
    console.log("window is resized. Init carousel");
     new Carousel();
  })();

})(); // end use strict.