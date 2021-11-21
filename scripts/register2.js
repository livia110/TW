$(document).ready(function () {

    $('.input').validate({ // initialize the plugin
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
          name: {
            required: 'You should complete all inputs'
          },

          email: {
              required: 'You should complete all inputs',
              email: 'Invalid email'
          },

          password: {
              required: 'You should complete all inputs',
              minlength: 'Min lenght - 5 characters'
          },

          confirm: {
              required: 'You should complete all inputs',
              minlength: 'Min lenght - 5 characters',
              equalTo : 'Incorrect value'
          }
        }
    });

});