define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--appendTo', args), disqus;
        if (i !== -1 && i + 1 < args.length) {
            $(args[i + 1]).append('<div id="disqus_thread"></div>');
        }
        i = $.inArray('--prependTo', args);
        if (i !== -1 && i + 1 < args.length) {
            $(args[i + 1]).prepend('<div id="disqus_thread"></div>');
        }
        disqus = document.getElementById('disqus-js');
        if (!disqus) {
            disqus = document.createElement('script');
            disqus.id = 'disqus-js';
            disqus.async = true;
            disqus.src = '//' + args[args.length - 1] + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus);
        }
        return ctx.done;
    };
});
