define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).click(function() {
            args[2](function(){}, function(){});
        });
        return ctx.done;
    };
});
