// Business logic: Backend
function caltotal() {
  var total = 0;
  $(".quiz:checked").each(function() {
    total += parseInt($(this).val(), 10);
  });
}


// User interface: Front end
// $(document).ready(function() {
//   $("form").submit(function() {
//     event.preventDefault();
//     caltotal();
//     var total;
//     console.log(total);
//   });

  // });
  // if (total = 0;) {
  //   $(.result).show();
});
