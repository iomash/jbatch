define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var a, i, twitter;
        if (args[1] === 'follow') {
            a = document.createElement('a');
            a.href = 'https://twitter.com/' + args[args.length - 1];
            a.className = 'twitter-follow-button';
            i = $.inArray('--size', args);
            if (i !== -1 && i + 1 < args.length) {
                a.dataset.size = args[i + 1];
            }
            i = $.inArray('--showCount', args);
            if (i !== -1 && i + 1 < args.length) {
                a.dataset.showCount = args[i + 1];
            }
            i = $.inArray('--showScreenName', args);
            if (i !== -1 && i + 1 < args.length) {
                a.dataset.showScreenName = args[i + 1];
            }
        } else {
            return ctx.fail;
        }
        i = $.inArray('--appendTo', args);
        if (i !== -1 && i + 1 < args.length) {
            $(args[i + 1]).append(a);
        }
        i = $.inArray('--prependTo', args);
        if (i !== -1 && i + 1 < args.length) {
            $(args[i + 1]).prepend(a);
        }
        twitter = document.getElementById('twitter-wjs');
        if (!twitter) {
            twitter = document.createElement('script');
            twitter.id = 'twitter-wjs';
            twitter.src = '//platform.twitter.com/widgets.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(twitter);
        }
        return ctx.done;
    };
});
