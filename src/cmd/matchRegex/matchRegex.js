define(function() {
    'use strict';
    return function(args, ctx) {
        ctx.write(ctx.read().match(new RegExp(args[1])));
        return ctx.done;
    };
});
