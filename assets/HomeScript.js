$(document).ready(function() {
//Implement the "slide to left" when the user clicks on #carousel-next here
$("#carousel-prev").click(function() {
    var curMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curMargin == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", curMargin + 960);
    }
})

//Implement the "slide to right" when the user clicks on #carousel-prev here
$("#carousel-next").click(function() {
    var curMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (curMargin == -3480) {
      return false;
    } else {
      $("#carousel").css("margin-left", curMargin - 960);
    }
  })
});
