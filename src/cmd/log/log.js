define(function() {
    'use strict';
    return function(args, ctx) {
        console.log(ctx.read());
        return ctx.done;
    };
});
