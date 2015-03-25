define(['jquery', 'jbatchParser'], function($, jbatchParser) {
    'use strict';
    return function(args, ctx) {
        $.ajax({
            type: 'GET',
            url: args[1],
            success: function(data) {
                jbatchParser.exec(data).then(function(results) {
                    results.forEach(ctx.write);
                    ctx.done();
                }, ctx.fail);
            },
            error: function(xhr, e, ex) {
                ctx.fail(e);
            }
        });
    };
});
