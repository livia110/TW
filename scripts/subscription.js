$(document).ready(function() {
  $('.loginbtn').click(function(event){
    if($('input[name="name"]').val() == "")
    {
      $('input[name="name"]').css("background-color", "red");
      $('input[name="name"]').attr("placeholder", "Error! The field is empty!");
      event.preventDefault();
    }
    
    if($('input[name="email"]').val() == "")
    {
      $('input[name="email"]').css("background-color", "red");
      $('input[name="email"]').attr("placeholder", "Error! The field is empty!");
      event.preventDefault();
    }
  })

  $('input:text').focus(
    function(){
    $(this).css({'background-color' : 'white'});
});
});