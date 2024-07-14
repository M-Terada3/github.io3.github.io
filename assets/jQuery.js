//hamburger
$(function () {
  $(".hamBtn").on("click", function () {
    $(".hamBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

$(function () {
  $(".ham_fixBtn").on("click", function () {
    $(".ham_fixBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

//slider
$(function () {
  $(".slider").slick({
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true,
    prevArrow: '<img src="./img/yazirusi_baundo.png" class="slide-arrow prev-arrow">',
  });
});