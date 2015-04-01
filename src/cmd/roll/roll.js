define(['jquery', '//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--waitForEnd', args), waitForEnd = false, duration = 900, keyframes;
        if (i !== -1 && i + 1 < args.length) {
            waitForEnd = true;
        }
        i = $.inArray('--duration', args);
        if (i !== -1 && i + 1 < args.length) {
            duration = args[i + 1];
        }
        var op = args[1];
        var elem = document.querySelector(args[args.length - 1]);
        if (op === 'in') {
            elem.style.opacity = 0;
            elem.style.display = 'block';
            elem.style.visibility = 'visible';
            keyframes = [
                {transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0},
                {transform: 'none', opacity: '1', offset: 1}
            ];
            var player = elem.animate(keyframes, {duration: duration, iterations: 1});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out') {
            keyframes = [
                {transform: 'none', opacity: '1', offset: 0},
                {transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}
            ];
            var player = elem.animate(keyframes, {duration: duration, iterations: 1});
            player.onfinish = function() {
                elem.style.display = 'none';
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else {
            return ctx.done;
        }
        if (!waitForEnd) {
            return ctx.done;
        }
    };
});
