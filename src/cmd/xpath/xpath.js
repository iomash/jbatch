define(function() {
    'use strict';
    return function(args, ctx) {
        var xpathResult = document.evaluate(args[1], ctx.read(), null, XPathResult.ANY_TYPE, null), node;
        while (node = xpathResult.iterateNext()) {
            ctx.write(node);
        }
        return ctx.done;
    };
});
