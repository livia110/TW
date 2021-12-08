$(document).ready(function () {
  $('.input').validate({
      rules: {
          name: {
            required: true
          },

          email: {
              required: true,
              email: true
          },

          password: {
              required: true,
              minlength: 5
          },

          confirm: {
              required: true,
              minlength: 5,
              equalTo : "#password"
          }
      },

      messages:{

        email: {
            email: 'Invalid email'
        },

        password: {
            minlength: 'Min lenght - 5 characters'
        },

        confirm: {
            minlength: 'Min lenght - 5 characters',
            equalTo : 'Incorrect value'
        }
      },

      submitHandler: function(form) {
        let dataInput = $(".input").serialize();
        $.ajax({
          type: 'POST',
          url: 'forms\\register.php',
          data: dataInput,
          success: function(result){
              console.log(result);

              var resultData = JSON.parse(result);
              if (resultData.status == "SUCCESS"){
                console.log("Success");
                $('.status').text("You're registred successfull");
                $('.status').css("background-color", "#9AE66E");
              }
              else if (resultData.status == "FAIL1") {
                console.log("Insuccess1");
                $('.status').text("Empty fields");
                $('.status').css("background-color", "#A9333A");
              }
              else if (resultData.status == "FAIL2") {
                $('.status').text("This email is already used");
                $('.status').css("background-color", "#A9333A");
              }
              else if (resultData.status == "FAIL3") {
                console.log("Insuccess3");
                $('.status').text("Database data insert error");
                $('.status').css("background-color", "#A9333A");
              }
          }
        })
      }

  });

});