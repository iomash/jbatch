define(function() {
    'use strict';
    return function(args, ctx) {
        var data = ctx.read();
        data.autoplay = 'autoplay';
        ctx.write(data);
        return ctx.done;
    };
});
