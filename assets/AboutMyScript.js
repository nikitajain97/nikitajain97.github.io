$(document).ready(function() {

  $("#header").click(function(){
    $("#subheader").hide();
    $("#subheader").append(" Surprise again!");
  })

  $("#thumbnail").click(function() {
    $("#subheader").show();
  })

});
