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

    //Controling Slick Plugin
    function controlSlick() {
        $('.paper-wrapper').slick({
            speed: 500,
            adaptiveHeight: true,
            arrow: true,
            cssEase: 'cubic-bezier(.17,.67,.38,.98)'
        });
    }
    controlSlick();

    function introChangeTxt() {
        var words = ['passion', 'dedication', 'style'];
        var wordsTwo = ['love', 'precision', 'class'];
        var index = 0;

        function rotateWords() {
            $('.swap,.switch').delay(1800).fadeOut('fast', function(){
                $('.swap').text(words[index]);
                $('.switch').text(wordsTwo[index]);
                $('.swap').fadeIn('fast', function(){
                    if (index === words.length - 1) {
                        index = 0;
                    }
                    else {
                        index++;
                    }
                });
                $('.switch').fadeIn('fast', function(){
                    if (index === wordsTwo.length -1) {
                        index = 0;
                    }
                    else {
                        index++;
                    }
                });
            });
        }
        setInterval(rotateWords, 2500);
    }
    introChangeTxt();

});
