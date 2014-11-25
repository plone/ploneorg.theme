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

  $("#slider").zAccordion({
    width: 1140,
    speed: 600,
    slideClass: "slider",
    slideWidth: 800,
    height: 400
  });

});

