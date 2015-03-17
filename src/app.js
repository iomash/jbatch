require.config({
    skipDataMain: true,
    paths: {
        jquery: '//cdn.jsdelivr.net/jquery/2.1.3/jquery.min'
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
