define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $.ajax({
            type: 'GET',
            url: 'https://gdata.youtube.com/feeds/api/videos',
            data: {
                v: 2,
                alt: 'jsonc',
                format: 5,
                q: args[1],
                'max-results': 1
            },
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
