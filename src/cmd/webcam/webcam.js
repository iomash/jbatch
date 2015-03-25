define(function() {
    'use strict';
    return function(args, ctx) {
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true, audio: true }, function(localMediaStream) {
                var video = document.createElement('video');
                video.src = window.URL.createObjectURL(localMediaStream);
                ctx.write(video);
                ctx.done();
            }, function() {
                ctx.fail();
            });
        } else {
            return ctx.fail;
        }
    };
});
