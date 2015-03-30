define(['lib/jsonPath'], function(jsonPath) {
    'use strict';
    return function(args, ctx) {
        ctx.write(jsonPath({}, ctx.read(), args[1]));
        return ctx.done;
    };
});
