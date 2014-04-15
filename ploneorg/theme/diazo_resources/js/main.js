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
});

