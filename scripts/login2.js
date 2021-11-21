$(document).ready(function () {

    $('.input').validate({ // initialize the plugin
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
              required: 'You should complete all inputs',
              email: 'Invalid email'
          },
          password: {
              required: 'You should complete all inputs',
              minlength: 'Min lenght - 5 characters'
          }
        }
    });

});