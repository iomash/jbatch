define(function() {
    'use strict';
    return function(args, ctx) {
        ctx.write(JSON.stringify(ctx.read()));
        return ctx.done;
    };
});
