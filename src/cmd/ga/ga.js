define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        if (args[1] === 'create' && args.length > 2) {
            // See https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
            $(document.head).append('<script async src="//www.google-analytics.com/analytics.js"></script>');
            window.ga = window.ga || function() {
                (ga.q = ga.q || []).push(arguments);
            };
            ga.l = +new Date;
            ga(args[1], args[2], 'auto');
        } else {
            ga.apply(this, args.slice(1));
        }
        return ctx.done;
    };
});
