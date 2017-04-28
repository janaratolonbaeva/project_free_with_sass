function changeBgHeader() {
	$(".menu-toggle, .menu").hover(
		function() {
			$('#header').css("opacity", "1");
		},
		function() {
			$('#header').css("opacity", "0.5");
	});
};

changeBgHeader();


$(window).scroll(function() {
    if ($(this).scrollTop() + 10 >= $('#service').offset().top){
        $('#header').addClass("sticky");
    }
    else{
        $('#header').removeClass("sticky");
    }
});

$('.menu a').smoothScroll();