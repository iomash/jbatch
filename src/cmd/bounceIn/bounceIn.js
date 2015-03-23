define(['//cdn.jsdelivr.net/web-animations/1.0.6/web-animations.min.js'], function() {
    'use strict';
    return function(args, ctx) {
        var elem = document.querySelector(args[1]),
        keyframes = [
          { transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0 },
          { transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 },
          { transform: 'scale3d(.9, .9, .9)', offset: 0.4 },
          { transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6 },
          { transform: 'scale3d(.97, .97, .97)', offset: 0.8 },
          { transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1 }
        ],
        timing = { duration: 900, iterations: 1, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
        elem.style.display = 'block';
        elem.animate(keyframes, timing);
        return ctx.done;
    };
});
