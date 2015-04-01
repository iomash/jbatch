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
        if (op === 'in-right' || op === 'in-left') {
            elem.style.opacity = 0;
            elem.style.display = 'block';
            elem.style.visibility = 'visible';
            if (op === 'in-right') {
                keyframes = [
                    {transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
                    {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
                    {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
                    {transform: 'none', opacity: '1 ', offset: 1}
                ];
            } else if (op === 'in-left') {
                keyframes = [
                    {transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0},
                    {transform: 'skewX(20deg)', opacity: '1', offset: 0.6},
                    {transform: 'skewX(-5deg)', opacity: '1', offset: 0.8},
                    {transform: 'none', opacity: '1 ', offset: 1}
                ];
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out-right' || op === 'out-left') {
            if (op === 'out-right') {
                keyframes = [
                    {transform: 'none', opacity: '1 ', offset: 0},
                    {transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}
                ];
            } else if (op === 'out-left') {
                keyframes = [
                    {transform: 'none', opacity: '1 ', offset: 0},
                    {transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}
                ];
            }
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
