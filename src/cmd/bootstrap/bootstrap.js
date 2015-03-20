// Bootstrap requires jQuery
define(['jquery'], function() {
    'use strict';
    return function(args, ctx) {
        var css = document.createElement('link'), js;
        css.href = '//cdn.jsdelivr.net/bootstrap/3.3.4/css/bootstrap.min.css';
        css.rel = 'stylesheet';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
        js = document.createElement('script');
        js.src = '//cdn.jsdelivr.net/bootstrap/3.3.4/js/bootstrap.min.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(js);
        return ctx.done;
    };
});
