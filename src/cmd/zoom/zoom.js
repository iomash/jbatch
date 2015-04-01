define(['jquery', '//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js'], function($) {
    'use strict';
    return function(args, ctx) {
        var i = $.inArray('--waitForEnd', args), waitForEnd = false, dir, duration = 900, keyframes, easing = 'ease';
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
            easing = 'cubic-bezier(0.550, 0.055, 0.675, 0.190)';
            if (dir === 'down') {
                keyframes = [
                    {transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', opacity: '0',  offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', opacity: '0',  offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
                easing = '';
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: easing});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out') {
            easing = 'cubic-bezier(0.550, 0.055, 0.675, 0.190)';
            if (dir === 'down') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
                    {transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', opacity: '0',  transformOrigin: 'center bottom', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4},
                    {transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', opacity: '0', transformOrigin: 'center bottom', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4},
                    {transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'right center', offset: 0},
                    {transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: '1',  transformOrigin: 'right center', offset: 0.4},
                    {transform: 'scale(.1) translate3d(2000px, 0, 0)', opacity: '0', transformOrigin: 'right center', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1}
                ];
                easing = '';
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: easing});
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
