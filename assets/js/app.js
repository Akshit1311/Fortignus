$("#site").click(() => {
  $(".navb").addClass("navb-close");
  $(".navb").removeClass("navb-open");
  $(".fa-arrow-left").addClass("d-none");
  $(".ham").removeClass("d-none");
  $(".navb-items").addClass("d-none");
});

$(".ham").click(() => {
  $(".navb").removeClass("navb-close");
  $(".navb").addClass("navb-open");
  $(".ham").addClass("d-none");
  $(".fa-arrow-left").removeClass("d-none");
  $(".navb-items").removeClass("d-none");
});
$(".fa-arrow-left").click(() => {
  $(".navb").addClass("navb-close");
  $(".navb").removeClass("navb-open");
  $(".fa-arrow-left").addClass("d-none");
  $(".ham").removeClass("d-none");
  $(".navb-items").addClass("d-none");
});

$(".check-scroll-btn").click(() => {
  alert($(document).scrollTop());
});

$(document).scroll(() => {
  var scrollVal = $(document).scrollTop();
  if (scrollVal > 150) {
    $(".blur").css("background-size", "1000px");
  } else {
    $(".blur").css("background-size", "initial");
  }
});

$(".car-circle").on("click", (event) => {
  $(".active").removeClass("active");
  // console.log(event.target.id);
  var btnId = "#" + event.target.id;
  // console.log(btnId);
  $(btnId).addClass("active");
});

$(".fa-chevron-down").click(() => {
  $(".active").removeClass("active");
  $("#1").addClass("active");
});

// Change COlOR ON SCROLL

// $(document).scroll(function () {
//   scroll_pos = $(this).scrollTop();

//   if (scroll_pos > 200 && scroll_pos < 300) {
//     $("#usp").css("background-color", "white");
//   } else if (scroll_pos > 300 && scroll_pos < 400) {
//     $("#usp").css("background-color", "rgba(128, 128, 128, 0.700)");
//   } else if (scroll_pos > 500 && scroll_pos < 600) {
//     $("#usp").css("background-color", "rgba(128, 128, 128, 0.800)");
//   } else if (scroll_pos > 600 && scroll_pos < 700) {
//     $("#usp").css("background-color", "rgba(128, 128, 128, 0.900)");
//   } else if (scroll_pos > 700 && scroll_pos < 800) {
//     $("#usp").css("background-color", "black");
//   }
// });
