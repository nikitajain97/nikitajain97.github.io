$(document).ready(function(){

  $("#enter").hover(
    function() {
      $(this).css('background', 'white');
      $(this).css('color', '#fcd248');
    },
    function() {
      $(this).css('background', 'transparent');
      $(this).css('color', 'white');
    }
  );
});
