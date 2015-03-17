define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        try {
            ctx.write($.parseXML(args[1]));
        } catch (ex) {
            ctx.write(ex);
            return ctx.fail;
        }
        return ctx.done;
    };
});
