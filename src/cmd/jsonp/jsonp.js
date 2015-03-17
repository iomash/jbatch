define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--callback', args), callback = null;
        if (i !== -1 && i + 1 < args.length) {
            callback = args[i + 1];
        }
        $.ajax({
            type: 'GET',
            url: args[1],
            dataType: 'jsonp',
            jsonpCallback: callback,
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
