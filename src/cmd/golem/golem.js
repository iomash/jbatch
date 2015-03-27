define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--key', args), key, url;
        if (i !== -1 && i + 1 < args.length) {
            key = args[i + 1];
        }
        if (args[1] === 'searchArticles') {
            url = 'http://api.golem.de/api/article/search/';
            i = $.inArray('--page', args);
            if (i !== -1 && i + 1 < args.length) {
                url += args[i + 1] + '/';
            }
            i = $.inArray('--itemsPerPage', args);
            if (i !== -1 && i + 1 < args.length) {
                url += args[i + 1] + '/';
            }
            url += args[args.length - 1] + '/';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                jsonp: 'jsonp',
                data: {
                    key: key
                },
                success: function(data) {
                    ctx.write(data);
                    ctx.done();
                },
                error: function(xhr, e, ex) {
                    ctx.fail(e);
                }
            });
        } else if (args[1] === 'latestArticles') {
            url = 'http://api.golem.de/api/article/latest/';
            i = $.inArray('--limit', args);
            if (i !== -1 && i + 1 < args.length) {
                url += args[i + 1] + '/';
            }
            $.ajax({
                url: url,
                dataType: 'jsonp',
                jsonp: 'jsonp',
                data: {
                    key: key
                },
                success: function(data) {
                    ctx.write(data);
                    ctx.done();
                },
                error: function(xhr, e, ex) {
                    ctx.fail(e);
                }
            });
        } else if (args[1] === 'topArticles') {
            url = 'http://api.golem.de/api/article/top/';
            i = $.inArray('--limit', args);
            if (i !== -1 && i + 1 < args.length) {
                url += args[i + 1] + '/';
            }
            $.ajax({
                url: url,
                dataType: 'jsonp',
                jsonp: 'jsonp',
                data: {
                    key: key
                },
                success: function(data) {
                    ctx.write(data);
                    ctx.done();
                },
                error: function(xhr, e, ex) {
                    ctx.fail(e);
                }
            });
        } else {
            return ctx.fail;
        }
    };
});
