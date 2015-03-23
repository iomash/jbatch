define(['jquery', '//cdn.jsdelivr.net/highlight.js/8.4/highlight.min.js'], function($, hljs) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--style', args), style = 'default';
        if (i !== -1 && i + 1 < args.length) {
            style = args[i + 1];
        }
        $(document.head).append('<link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/8.4/styles/' + style + '.min.css">');
        $(args[args.length - 1]).each(function(i, block) {
            hljs.highlightBlock(block);
        });
        return ctx.done;
    };
});
