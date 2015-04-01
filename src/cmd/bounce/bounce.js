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
                    {transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0},
                    {transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6},
                    {transform: 'translate3d(0, -100px, 0)', offset: 0.75},
                    {transform: 'translate3d(0, 5px, 0)', offset: 0.9},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0},
                    {transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6},
                    {transform: 'translate3d(0, 100px, 0)', offset: 0.75},
                    {transform: 'translate3d(0, -5px, 0)', offset: 0.9},
                    {transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0},
                    {transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6},
                    {transform: 'translate3d(-100px, 0, 0)', offset: 0.75},
                    {transform: 'translate3d(5px, 0, 0)', offset: 0.9},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0},
                    {transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6},
                    { transform: 'translate3d(100px, 0, 0)', offset: 0.75},
                    {transform: 'translate3d(-5px, 0, 0)', offset: 0.9},
                    {transform: 'none', opacity: '1', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0},
                    {transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2},
                    {transform: 'scale3d(.9, .9, .9)', offset: 0.4},
                    {transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6},
                    {transform: 'scale3d(.97, .97, .97)', offset: 0.8},
                    {transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}
                ];
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out') {
            if (dir === 'down') {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
                    {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4},
                    {transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45},
                    {transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1}
                ];
            } else if (dir === 'up') {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2},
                    {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4},
                    {transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45},
                    {transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1}
                ];
            } else if (dir === 'left') {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
                    {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
                    {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
                    {transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1}
                ];
            } else if (dir === 'right') {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2},
                    {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4},
                    {transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45},
                    {transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'none', opacity: '1', offset: 0},
                    {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
                    {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
                    {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
                    {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}
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
            keyframes = [
                {transform: 'translate3d(0,0,0)', offset: 0},
                {transform: 'translate3d(0,0,0)', offset: 0.2},
                {transform: 'translate3d(0,-30px,0)', offset: 0.4},
                {transform: 'translate3d(0,-30px,0)', offset: 0.43},
                {transform: 'translate3d(0,0,0)', offset: 0.53},
                {transform: 'translate3d(0,-15px,0)', offset: 0.7},
                {transform: 'translate3d(0,0,0)', offset: 0.8},
                {transform: 'translate3d(0,-15px,0)', offset: 0.9},
                {transform: 'translate3d(0,0,0)', offset: 1}
            ];
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'});
            player.onfinish = function() {
                if (waitForEnd) {
                    ctx.done();
                }
            }
        }
        if (!waitForEnd) {
            return ctx.done;
        }
    };
});
