define([
        "jquery"
    ],
    function($) {
        "use strict";

        $('.langs-wrapper').hover(function() {
            $('.langs-others-container').toggleClass('langs-others-container-inline');
        });

        $('.header > li a').last().click(function() {
            $('.header-mini').slideToggle("slow");
        });

        $('.header > li a').mouseenter(function() {
            $(this).prepend('<small class="effect-arrow">></small>').append('<span class="effect">_</span>');
            setInterval(function() { dashBlink() }, 1000);
            function dashBlink() {
                $(".effect").fadeTo(700, 0.1).fadeTo(1000, 1.0);
            }
        });

        $('.header > li a').mouseleave(function() {
            $(this).find('.effect').remove();
            $(this).find('.effect-arrow').remove();
        });

    });