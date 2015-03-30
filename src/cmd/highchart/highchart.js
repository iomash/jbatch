define(['jquery', 'highcharts'], function($, highcharts) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--container', args), container = 'body', title = null, subtitle = null, xAxis = null, yAxis = null;
        if (i !== -1 && i + 1 < args.length) {
            container = args[i + 1];
        }
        i = $.inArray('--title', args);
        if (i !== -1 && i + 1 < args.length) {
            title = args[i + 1];
        }
        i = $.inArray('--subtitle', args);
        if (i !== -1 && i + 1 < args.length) {
            subtitle = args[i + 1];
        }
        i = $.inArray('--xAxis', args);
        if (i !== -1 && i + 1 < args.length) {
            xAxis = args[i + 1];
        }
        i = $.inArray('--yAxis', args);
        if (i !== -1 && i + 1 < args.length) {
            yAxis = args[i + 1];
        }
        if (args[1] === 'line') {
            $(container).highcharts({
                title: {
                    text: title
                }, subtitle: {
                    text: subtitle
                },
                xAxis: {
                    title: {
                        text: xAxis
                    }
                },
                yAxis: {
                    title: {
                        text: yAxis
                    }
                },
                series: ctx.read()
            });
        } else {
            return ctx.fail;
        }
        return ctx.done;
    };
});
