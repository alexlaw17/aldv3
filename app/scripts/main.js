$(function() {
    'use strict';
    //Loading Screen
    function loadingScreen() {
        $(window).load(function() {
            $('#loader').delay(1500).fadeOut('500', function() {
                $('.wrapper').removeClass('overflow');
                $('.intro .content').fadeIn(800, function() {
                    $('.arrow-down').animate({
                        opacity: 1
                    }, 500);
                });
            });
        });
    }
    loadingScreen();
    //Smooth Scroll
    //CSS Tricks Code Snippet - https://css-tricks.com/snippets/jquery/smooth-scrolling/
    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 300);
                    return false;
                }
            }
        });
    }
    smoothScroll();

    //Navigation Bar Toggle
    function menu() {
        var toggle = $('.sliding-navbar-toggle');
        var main = $('.sliding-navbar-main');

        toggle.click(function() {
            main.toggleClass('sliding-navbar-active');
            // $('.frame').toggleClass('frame-active');
            $('.hamburger').toggleClass('active');
        });
    }
    menu();

    $('.paper-wrapper').slick({
        // autoplay: true,
        speed: 500,
        adaptiveHeight: true,
        // fade: true,
        arrow: true,
        cssEase: 'cubic-bezier(.17,.67,.38,.98)'
    });
});
