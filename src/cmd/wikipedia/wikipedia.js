define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $.ajax({
            type: 'GET',
            url: 'http://en.wikipedia.org/w/api.php',
            dataType: 'jsonp',
            data: {
                action: 'query',
                prop: 'pageterms',
                format: 'json',
                'continue': '',
                titles: args[1]
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
