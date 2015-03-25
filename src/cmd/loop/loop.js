define(function() {
    'use strict';
    return function(args, ctx) {
        var data = ctx.read();
        data.loop = 'loop';
        ctx.write(data);
        return ctx.done;
    };
});
