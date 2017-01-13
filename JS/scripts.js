// Business logic: Backend
// function design() {
//   $(".design").show();
// };



// User interface: Front end
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("input:radio[name=actv]:checked").val());
    var b = parseInt($("input:radio[name=env]:checked").val());
    var c = parseInt($("input:radio[name=thought]:checked").val());
    var d = parseInt($("input:radio[name=skill]:checked").val());
    var e = parseInt($("input:radio[name=apt]:checked").val());
    var score = (a + b + c + d + e)/5;
    if (score === 0) {
      $(".result").show();
    }
    });
  });
  // if (total = 0;) {
  //   $(.result).show();






  // // TO ASK JOHN //
  // Function caltotal() {
  //   var total = 0;
  //   $(".quiz:checked").each(function() {
  //     total += parseInt($(this).val(), 10);
  //   });
  // };
  //
  // $(document).ready(function() {
  //   $(".quiz").change(function() {
  //     caltotal() });
