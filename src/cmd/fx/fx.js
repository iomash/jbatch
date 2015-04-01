define(['jquery', '//cdn.jsdelivr.net/money.js/0.2/money.min.js'], function($, fx) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--loadOpenExchangeRates', args), loadOpenExchangeRates, settings = {};
        if (i !== -1 && i + 1 < args.length) {
            loadOpenExchangeRates = args[i + 1];
        }
        if (loadOpenExchangeRates) {
            $.getJSON('//openexchangerates.org/api/latest.json?app_id=' + loadOpenExchangeRates, function(data) {
                fx.rates = data.rates;
                fx.base = data.base;
                ctx.done();
            });
        } else {
            i = $.inArray('--from', args);
            if (i !== -1 && i + 1 < args.length) {
                settings.from = args[i + 1];
            }
            i = $.inArray('--to', args);
            if (i !== -1 && i + 1 < args.length) {
                settings.to = args[i + 1];
            }
            ctx.write(fx.convert(args[args.length - 1], settings));
            return ctx.done;
        }
    };
});
