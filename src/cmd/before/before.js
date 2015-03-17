define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).before(ctx.read());
        return ctx.done;
    };
});
