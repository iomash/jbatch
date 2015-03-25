define(function() {
    'use strict';
    return function(args, ctx) {
        var serializer = new XMLSerializer();
        ctx.write(serializer.serializeToString(ctx.read()));
        return ctx.done;
    };
});
