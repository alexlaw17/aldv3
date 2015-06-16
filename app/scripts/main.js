$(function() {
	//Navigation Bar Toggle
	var toggle = $('.sliding-navbar-toggle');
	var main = $('.sliding-navbar-main');

	toggle.click(function() {
		main.toggleClass('sliding-navbar-active');
		$('.frame').toggleClass('frame-active');
		$('.hamburger').toggleClass('active');
	});

	// WoW JS http://mynameismatthieu.com/WOW/docs.html
	// WOW().init();
});