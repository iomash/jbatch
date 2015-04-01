define(['jquery', '//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--waitForEnd', args), waitForEnd = false, dir, duration = 900, keyframes;
        if (i !== -1 && i + 1 < args.length) {
            waitForEnd = true;
        }
        i = $.inArray('--direction', args);
        if (i !== -1 && i + 1 < args.length) {
            dir = args[i + 1];
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
            if (dir === 'down') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'downBig') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'upBig') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'leftBig') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else if (dir === 'rightBig') {
                keyframes = [
                    {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0},
                    {opacity: '1', transform: 'none', offset: 1}
                ];
            } else {
                keyframes = [
                    {opacity: '0', offset: 0},
                    {opacity: '1', offset: 1}
                ];
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out') {
            if (dir === 'down') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}
                ];
            } else if (dir === 'downBig') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}
                ];
            } else if (dir === 'upBig') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}
                ];
            } else if (dir === 'leftBig') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}
                ];
            } else if (dir === 'rightBig') {
                keyframes = [
                    {opacity: '1', transform: 'none', offset: 0},
                    {opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}
                ];
            } else {
                keyframes = [
                    {opacity: '1', offset: 0},
                    {opacity: '0', offset: 1}
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
