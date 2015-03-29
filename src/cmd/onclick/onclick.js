define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        $(args[1]).click(function(ev) {
            args[2](function(){}, function(){});
            if (ev.target.tagName === 'A' && !ev.target.getAttribute('href')) {
                return false;
            }
        });
        return ctx.done;
    };
});
