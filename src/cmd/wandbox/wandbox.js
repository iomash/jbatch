define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        if (args[1] === 'list') {
            $.ajax({
                type: 'GET',
                url: 'http://melpon.org/wandbox/api/list.json',
                success: function(data) {
                    ctx.write(data);
                    ctx.done();
                },
                error: function(xhr, e, ex) {
                    ctx.fail(e);
                }
            });
        } else if (args[1] === 'run') {
            $.ajax({
                type: 'POST',
                url: 'http://melpon.org/wandbox/api/compile.json',
                data: JSON.stringify({
                    compiler: args[2],
                    code: $(args[3]).text()
                }),
                dataType: 'json',
                success: function(data) {
                    ctx.write(data.program_message);
                    ctx.done();
                },
                error: function(xhr, e, ex) {
                    ctx.fail(e);
                }
            });
        } else {
            return ctx.fail;
        }
    };
});
