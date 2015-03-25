define(['//cdn.jsdelivr.net/jsonmask/0.3.4/jsonMask.min.js'], function(jsonMask) {
    'use strict';
    return function(args, ctx) {
        ctx.write(jsonMask(ctx.read(), args[1]));
        return ctx.done;
    };
});
