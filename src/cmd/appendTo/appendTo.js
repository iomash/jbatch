define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).append(ctx.read());
        return ctx.done;
    };
});
