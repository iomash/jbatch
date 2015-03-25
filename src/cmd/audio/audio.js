define(function() {
    'use strict';
    return function(args, ctx) {
        var audio = document.createElement('audio');
        audio.src = args[1];
        ctx.write(audio);
        return ctx.done;
    };
});
