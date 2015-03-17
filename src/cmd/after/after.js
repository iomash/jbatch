define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).after(ctx.read());
        return ctx.done;
    };
});
