// Business logic: Backend
function design() {
  $(".survey").fadeOut();
  $(".result").fadeToggle();
  $(".design").fadeIn(); }

function cplus() {
  $(".survey").fadeOut();
  $(".result").fadeToggle();
  $(".c-plus").fadeIn(); }

function javar() {
  $(".survey").fadeOut();
  $(".result").fadeToggle();
  $(".java").fadeIn(); }

function ruby() {
  $(".survey").fadeOut();
  $(".result").fadeToggle();
  $(".ruby").fadeIn(); }

function php() {
  $(".survey").fadeOut();
  $(".result").fadeToggle();
  $(".php").fadeIn(); }


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
    if (score >= 0 && score <= 3) {
      design();
    } else if (score > 3 && score <= 6) {
      cplus();
    } else if (score > 6 && score <= 9) {
      javar();
    } else if (score > 9 && score <= 12) {
      ruby();
    } else if (score > 12 && score <= 15) {
      php();
    };
    });
  $("button#refresh").click(function () {
    location = self.location
  });
  });












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
