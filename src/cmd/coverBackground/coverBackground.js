define(function() {
    'use strict';
    return function(args, ctx) {
        var data = ctx.read();
        data.style.position = 'fixed';
        data.style.right = 0;
        data.style.bottom = 0;
        data.style.minWidth = '100%';
        data.style.minHeight = '100%';
        data.style.width = 'auto';
        data.style.height = 'auto';
        data.style.zIndex = -1;
        ctx.write(data);
        return ctx.done;
    };
});
