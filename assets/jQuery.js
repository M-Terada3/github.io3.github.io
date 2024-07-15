//pc fixMenu//
$(function() {
	var headerHeight = $('#fixNav').outerHeight(),
		startPos = 0;
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > startPos && scrollPos > headerHeight ) {
			$('#fixNav').css('top', '-' + headerHeight + 'px');
		} else {
			$('#fixNav').css('top', '0');
		}
		startPos = scrollPos;
	});
});


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
    $("nav").fadeOut(500);
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

