define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var a, i, size = '', showCount = false, showScreenName = true, twitter = document.getElementById('twitter-wjs');
        if (!twitter) {
            twitter = document.createElement('script');
            twitter.id = 'twitter-wjs';
            twitter.src = '//platform.twitter.com/widgets.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(twitter);
        }
        if (args[1] === 'follow') {
            i = $.inArray('--size', args);
            if (i !== -1 && i + 1 < args.length) {
                size = args[i + 1];
            }
            i = $.inArray('--showCount', args);
            if (i !== -1 && i + 1 < args.length) {
                showCount = args[i + 1];
            }
            i = $.inArray('--showScreenName', args);
            if (i !== -1 && i + 1 < args.length) {
                showScreenName = args[i + 1];
            }
            a = document.createElement('a');
            a.href = 'https://twitter.com/' + args[args.length - 1];
            a.className = 'twitter-follow-button';
            a.dataset.size = size;
            a.dataset.showCount = showCount;
            a.dataset.showScreenName = showScreenName;
            ctx.write(a);
        } else {
            return ctx.fail;
        }
        return ctx.done;
    };
});
