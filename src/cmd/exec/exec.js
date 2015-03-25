define(['jbatchParser'], function(jbatchParser) {
    'use strict';
    return function(args, ctx) {
        jbatchParser.exec(args.slice(1).join(' ')).then(function(results) {
            results.forEach(ctx.write);
            ctx.done();
        }, ctx.fail);
    };
});
