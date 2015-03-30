require.config({
    skipDataMain: true,
    baseUrl: '//jbatch.iomash.com/1/',
    paths: {
        jquery: '//cdn.jsdelivr.net/jquery/2.1.3/jquery.min',
        highcharts: '//cdn.jsdelivr.net/highcharts/4.1.4/highcharts'
    },
    shim: {
        highcharts: {
            deps: ['jquery'],
            exports: 'Highcharts'
        }
    }
});

require(['domready', 'jbatchParser'], function(domready, jbatchParser) {
    'use strict';
    domready(function() {
        var scripts = document.querySelectorAll('script[type="text/jbatch"]'), next = function(i) {
            var promise;
            if (i < scripts.length) {
                promise = jbatchParser.exec(scripts[i].text);
                if (scripts[i].hasAttribute('async')) {
                    next(i + 1);
                } else {
                    promise.then(function() { next(i + 1); });
                }
            }
        };
        next(0);
    });
});
