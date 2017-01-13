// User interface: Front end
$(document).ready(function() {
  $("form").submit(function(event) {
    var a = parseInt($("input:radio[name=actv]:checked").val());
    console.log(a);
    event.preventDefault;
  //   event.preventDefault;

  });
  // });
  // if (total = 0;) {
  //   $(.result).show();
});
