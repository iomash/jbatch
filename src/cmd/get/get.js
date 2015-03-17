define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $.ajax({
            type: 'GET',
            url: args[1],
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
