$(document).ready(function() {
      $('.loginbtn').click(function(event){
        if($('input[name="email"]').val() == "")
        {
          $('input[name="email"]').css("background-color", "red");
          $('input[name="email"]').attr("placeholder", "Error! The field is empty!");
          event.preventDefault();
        }
        if($('input[name="password"]').val() == "")
        {
          $('input[name="password"]').css("background-color", "red");
          $('input[name="password"]').val("");
          $('input[name="password"]').attr("placeholder", "Error! The field is empty!");
          event.preventDefault();
        }

        if($('input[name="password"]').val().length < 5)
        {
          $('input[name="password"]').css("background-color", "red");
          $('input[name="password"]').val("");
          $('input[name="password"]').attr("placeholder", "Error! The field is incorect!");
          event.preventDefault();
        }
      })

      $('input:text, input:password').focus(
        function(){
        $(this).css({'background-color' : 'white'});
    });
 });