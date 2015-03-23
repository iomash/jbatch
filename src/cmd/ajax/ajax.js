define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--type', args), type = 'GET', data = null;
        if (i !== -1 && i + 1 < args.length) {
            type = args[i + 1];
        }
        i = $.inArray('--data', args);
        if (i !== -1 && i + 1 < args.length) {
            data = args[i + 1];
        }
        $.ajax({
            type: type,
            url: args[args.length - 1],
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
