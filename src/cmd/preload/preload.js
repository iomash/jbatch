define(['require'], function(require) {
    'use strict';
    return function(args, ctx) {
        require(args.slice(1), function() {
            ctx.done();
        }, function() {
            ctx.fail();
        });
    };
});
