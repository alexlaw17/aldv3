$(function() {
    $(window).load(function() {
        $("#loader").delay(3000).fadeOut('slow');
    });

    //Smooth Scroll
    //CSS Tricks Code Snippet - https://css-tricks.com/snippets/jquery/smooth-scrolling/
    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }
    smoothScroll();

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
