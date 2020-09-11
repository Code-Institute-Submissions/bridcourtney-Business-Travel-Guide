$("#test").hide();
$("#autocomplete").keyup(function() {
  if ($(this).val()) {
    $("#test").show();
  } else {
    $("#test").hide();
  }
});


