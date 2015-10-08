$(function() {
    'use strict';
    //Loading Screen
    function loadingScreen() {
        $(window).load(function() {
            $('#loader').delay(1800).fadeOut('500', function() {
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

    function onScroll() {
        var scrollPos = $(document).scrollTop();
        $('.sliding-navbar-content .scroll').each(function() {
            var currentLink = $(this);
            var anchor = $(currentLink.attr('href'));
            if (anchor.position().top <= scrollPos && anchor.position().top + anchor.height() > scrollPos) {
                $('.sliding-navbar-content ul li a').removeClass('active');
                currentLink.addClass('active');
            } else {
                currentLink.removeClass('active');
            }
        });
    }
    // onScroll();

    $(document).on('scroll', onScroll);
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

    // function 
    // function introChangeTxt() {
    //     var words = ['passion', 'dedication', 'style'];
    //     var wordsTwo = ['love', 'precision', 'class'];
    //     var index = 0;

    //     function rotateWords() {
    //         $('.swap,.switch').delay(1800).fadeOut('fast', function(){
    //             $('.swap').text(words[index]);
    //             $('.switch').text(wordsTwo[index]);
    //             $('.swap').fadeIn('fast', function(){
    //                 if (index === words.length - 1) {
    //                     index = 0;
    //                 }
    //                 else {
    //                     index++;
    //                 }
    //             });
    //             $('.switch').fadeIn('fast', function(){
    //                 if (index === wordsTwo.length -1) {
    //                     index = 0;
    //                 }
    //                 else {
    //                     index++;
    //                 }
    //             });
    //         });
    //     }
    //     setInterval(rotateWords, 2500);
    // }
    // introChangeTxt();

    function skillbar() {
        $('.skillbar').each(function() {
            $(this).appear(function() {
                $(this).find('.count-bar').animate({
                    width: $(this).attr('data-percent')
                }, 1500);
                var percent = $(this).attr('data-percent');
                $(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
    }
    skillbar();

    function transitionPg() {
        $('.animsition').animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1000,
            outDuration: 500,
            // linkElement: '.animsition-link',
            linkElement: 'a:not([target="_blank"]):not([href^=#])',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) {
                window.location.href = url;
            }
        });
    }
    transitionPg();
});
