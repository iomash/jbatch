define(function() {
    'use strict';
    return function(args, ctx) {
        var video = document.createElement('video');
        video.src = args[1];
        ctx.write(video);
        return ctx.done;
    };
});
