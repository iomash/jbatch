define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $.getJSON('http://www.omdbapi.com/', {
            t: args[1]
        }, function(data) {
            if (data['Response'] === 'True') {
                ctx.write(data);
                ctx.done();
            } else {
                ctx.fail(data['Error']);
            }
        }).fail(function(xhr, e, ex) {
            ctx.fail(e);
        });
    };
});
