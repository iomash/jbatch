define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).prepend(ctx.read());
        return ctx.done;
    };
});
