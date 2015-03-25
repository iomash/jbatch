define(function() {
    'use strict';
    return function(args, ctx) {
        ctx.write(Math.random());
        return ctx.done;
    };
});
