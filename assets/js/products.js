$(".prod-heading").on("click", (event) => {
  $(".prod-active").removeClass("prod-active");
  // console.log(event.target.id);
  var prodId = "#" + event.target.id;
  // console.log(btnId);
  $(prodId).addClass("prod-active");
});

$("#prod1").click(() => {
  $(".prod-area-active").fadeOut();
  $(".prod-area-active").removeClass("prod-area-active");
  $("#product-area-1").addClass("prod-area-active");
  $("#product-area-1").fadeIn();
});
$("#prod2").click(() => {
  $(".prod-area-active").fadeOut();
  $(".prod-area-active").removeClass("prod-area-active");
  $("#product-area-2").addClass("prod-area-active");
  $("#product-area-2").fadeIn();
});
$("#prod3").click(() => {
  $(".prod-area-active").fadeOut();
  $(".prod-area-active").removeClass("prod-area-active");
  $("#product-area-3").addClass("prod-area-active");
  $("#product-area-3").fadeIn();
});
