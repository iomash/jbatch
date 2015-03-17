define(function() {
    'use strict';
    return function(args, ctx) {
        window.setTimeout(ctx.done, parseFloat(args[1], 10));
    };
});
