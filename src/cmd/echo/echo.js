define(function() {
    'use strict';
    return function(args, ctx) {
        ctx.write(args.slice(1).join(' '));
        return ctx.done;
    };
});
