define(['//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js'], function() {
    'use strict';
    return function(args, ctx) {
        var elem = document.querySelector(args[1]),
        keyframes = [
          {transform: 'none', opacity: '1', offset: 0},
          {transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2},
          {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5},
          {transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55},
          {transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1}
        ],
        timing = {duration: 900, iterations: 1},
        player = elem.animate(keyframes, timing);
        player.onfinish = function() {
            elem.style.display = 'none';
        }
        return ctx.done;
    };
});
