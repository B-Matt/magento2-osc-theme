define([
        "jquery"
    ],
    function($) {
        "use strict";

        $('.langs-wrapper').hover(function() {
            $('.langs-others-container').toggle();
        });

        $('.header > li a').last().click(function() {
            $('.header-mini').slideToggle("slow");
        });
    });