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
            if (dir === 'down-left') {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
                    {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}
                ];
            } else if (dir === 'down-right') {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
                    {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}
                ];
            } else if (dir === 'up-left') {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0},
                    {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}
                ];
            } else if (dir === 'up-right') {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0},
                    {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0},
                    {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}
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
            if (dir === 'down-left') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
                    {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}
                ];
            } else if (dir === 'down-right') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
                    {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}
                ];
            } else if (dir === 'up-left') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0},
                    {transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}
                ];
            } else if (dir === 'up-right') {
                keyframes = [
                    {transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0},
                    {transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}
                ];
            } else {
                keyframes = [
                    {transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1},
                    {transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0}
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
