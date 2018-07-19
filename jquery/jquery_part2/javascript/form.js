var s,
student = {
  settings: [{
    name: $("#name"),
    email: $("#email"),
    phone: $("#phone"),
    birthdate: $("#birthdate"),
    marks: $("#marks")

  }
  ],

  init: function() {

    s=this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {

  }

  };
student.init();

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$(function() {
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      birthdate: {
        required: true,
        date: true
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your firstname",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone no.",
      birthdate: "Please enter a valid date ",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});