define(function() {
    'use strict';
    return function(args, ctx) {
        ctx.write(window[args[1]](ctx.read()));
        return ctx.done;
    };
});
