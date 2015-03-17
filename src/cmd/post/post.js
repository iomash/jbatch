define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--data', args), data = null;
        if (i !== -1 && i + 1 < args.length) {
            data = args[i + 1];
        }
        $.ajax({
            type: 'POST',
            url: args[1],
            data: data,
            success: function(data) {
                ctx.write(data);
                ctx.done();
            },
            error: function(xhr, e, ex) {
               ctx.fail(e);
            }
        });
    };
});
