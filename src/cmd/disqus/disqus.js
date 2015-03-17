define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--appendTo', args), dsq;
        if (i !== -1 && i + 1 < args.length) {
            $(args[i + 1]).append('<div id="disqus_thread"></div>');
        }
        dsq = document.createElement('script');
        dsq.async = true;
        dsq.src = '//' + args[1] + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        return ctx.done;
    };
});
