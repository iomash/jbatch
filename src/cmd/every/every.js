define(function() {
    'use strict';
    return function(args, ctx) {
        window.setInterval(function() {
            args[2](function(){});
        }, parseFloat(args[1], 10));
    };
});
