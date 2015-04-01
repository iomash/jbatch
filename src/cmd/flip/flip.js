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
        if (op === 'in-x' || op === 'in-y') {
            elem.style.opacity = 0;
            elem.style.display = 'block';
            elem.style.visibility = 'visible';
            if (op === 'in-x') {
                keyframes = [
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0},
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4},
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6},
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8},
                    {transform: 'perspective(400px)', opacity: '1', offset: 1}
                ];
            } else if (op === 'in-y') {
                keyframes = [
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0},
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4},
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6},
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8},
                    {transform: 'perspective(400px)', opacity: '1', offset: 1}
                ];
            }
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: 'ease-in'});
            player.onfinish = function() {
                elem.style.opacity = 1;
                if (waitForEnd) {
                    ctx.done();
                }
            }
        } else if (op === 'out-x' || op === 'out-y') {
            if (op === 'out-x') {
                keyframes = [
                    {transform: 'perspective(400px)', opacity: '1', offset: 0},
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3},
                    {transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1}
                ];
            } else if (op === 'out-y') {
                keyframes = [
                    {transform: 'perspective(400px)', opacity: '1', offset: 0},
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3},
                    {transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1}
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
                {transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0},
                {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4},
                {transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5},
                {transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8},
                {transform: 'perspective(400px)', offset: 1}
            ];
            var player = elem.animate(keyframes, {duration: duration, iterations: 1, easing: 'ease-in'});
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
