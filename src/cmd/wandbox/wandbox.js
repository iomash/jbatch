define(['jquery'], function($) {
    'use strict';
    return function(args, ctx) {
        var i, compiler, code;
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
            i = $.inArray('--compiler', args);
            if (i !== -1 && i + 1 < args.length) {
                compiler = args[i + 1];
            }
            i = $.inArray('--select', args);
            if (i !== -1 && i + 1 < args.length) {
                code = $(args[i + 1]).text();
            }
            i = $.inArray('--code', args);
            if (i !== -1 && i + 1 < args.length) {
                code = args[i + 1];
            }
            $.ajax({
                type: 'POST',
                url: 'http://melpon.org/wandbox/api/compile.json',
                data: JSON.stringify({
                    compiler: compiler,
                    code: code
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
