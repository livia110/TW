$(document).ready(function () {

  $('.input').validate({
      rules: {
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 5
          }
      },

      messages:{
        email: {
            email: 'Invalid email'
        },
        password: {
            minlength: 'Min lenght - 5 characters'
        }
      },

      submitHandler: function(form) {
        let dataInput = $(".input").serialize();
        $.ajax({
          type: 'POST',
          url: 'forms\\login.php',
          data: dataInput,
          success: function(result){
            var resultData = JSON.parse(result);
            if (resultData.status == "SUCCESS"){
              console.log("Success");
              $('.status').text("You're logged successfull");
              $('.status').css("background-color", "#9AE66E");
            }
            else if (resultData.status == "FAIL1") {
              console.log("Insuccess1");
              $('.status').text("Empty fields");
              $('.status').css("background-color", "#A9333A");
            }
            else if (resultData.status == "FAIL2") {
              $('.status').text("Incorect email or password format");
              $('.status').css("background-color", "#A9333A");
            }
            else if (resultData.status == "FAIL3") {
              console.log("Insuccess3");
              $('.status').text("Incorect login or password");
              $('.status').css("background-color", "#A9333A");
            }
          }
        })
      }

  });
});