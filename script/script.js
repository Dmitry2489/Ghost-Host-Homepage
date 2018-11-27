// PARALLAX
$(window).scroll(function() {

    var st = $(this).scrollTop();
    $("h1, .header-text").css({
        "transform" : "translate(0%, " + st /3 + "0%"
    });
});
// КАРУСЕЛь
$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
        // Точки под каруселью
        itemsDesktop: [1600, 1],
        itemsTablet: [768,1],
        loop: true,
        autoPlay: true,
        autoPlayTimeout: 500,
        items: 1,
        scrollPerPage: 1,
    });
});
// MENU BURGER
/*
(function($) {
    $(function(){
        $('.burger-menu').on('click', function(){
            $(this).closest('nav').toggLeClass(nav-open);
        });
    });
});
*/