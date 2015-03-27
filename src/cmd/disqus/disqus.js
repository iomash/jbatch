define(function() {
    'use strict';
    return function(args, ctx) {
        var div, disqus = document.getElementById('disqus-js');
        if (!disqus) {
            disqus = document.createElement('script');
            disqus.id = 'disqus-js';
            disqus.async = true;
            disqus.src = '//' + args[args.length - 1] + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus);
        }
        div = document.createElement('div');
        div.id = 'disqus_thread';
        ctx.write(div);
        return ctx.done;
    };
});
