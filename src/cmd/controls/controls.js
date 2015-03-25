define(function() {
    'use strict';
    return function(args, ctx) {
        var data = ctx.read();
        data.controls = 'controls';
        ctx.write(data);
        return ctx.done;
    };
});
