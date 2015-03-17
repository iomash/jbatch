%lex

%%

[ \r\f\t]+            { /* skip whitespace */ }
[^\s|(){};'"]+        { return 'LITERAL'; }
[\n;]+                { return 'EOL'; }
<<EOF>>               { return 'EOF'; }
'|'                   { return '|'; }
'('                   { return '('; }
')'                   { return ')'; }
'{'                   { return '{'; }
'}'                   { return '}'; }
'\''(\\.|[^\\'])*'\'' { yytext = yytext.substr(1, yytext.length - 2).replace(/\\'/g, '\''); return 'SINGLEQUOTES'; }
'"'(\\.|[^\\"])*'"'   { yytext = yytext.substr(1, yytext.length - 2).replace(/\\"/g, '"'); return 'DOUBLEQUOTES'; }

/lex

%ebnf
%left '|'
%start batch

%%

string
  : LITERAL
  | SINGLEQUOTES
  | DOUBLEQUOTES
  ;

argument
  : string
  | '(' expression ')' -> $2
  | '{' batch '}' -> lazy($2)
  ;

command
  : LITERAL argument* -> createCommand([$1].concat($2))
  ;

pipe
  : (command '|')+ command -> createPipe($1.concat([$2]))
  ;

expression
  : command
  | pipe
  ;

batch
  : EOL* (expression EOL+)* expression? EOF?
    { $$ = createBatch($3 ? $2.concat([$3]) : $2); if (typeof $4 !== 'undefined') return $$; }
  ;

%%

require('es6-promise').polyfill();

function lazy(batch) {
    return function() {
        return function(fulfill) {
            fulfill(batch);
        };
    };
}

function createCommand(args) {
    return function(inbox) {
        return function(resolve, reject) {
            var promises = [];
            args.forEach(function(arg) {
                promises.push(typeof arg === 'function' ? new Promise(arg([])) : arg);
            });
            Promise.all(promises).then(function(args) {
                require([args[0]], function(job) {
                    var outbox = [], context = {
                        done: function() { resolve(outbox); },
                        fail: function(e) { reject(e); },
                        read: function() { return (inbox.length !== 0) ? inbox.shift() : null; },
                        write: function(data) { outbox.push(data); }
                    };
                    if (job(args, context) === context.done) {
                        context.done();
                    } else if (status === context.fail) {
                        context.fail();
                    }
                });
            });
        };
    };
}

function createPipe(commands) {
    return function() {
        return function(resolve, reject) {
            var next = function(i, inbox) {
                if (i < commands.length) {
                    var p = new Promise(commands[i](inbox));
                    p.then(function(outbox) {
                        next(i + 1, outbox);
                    }, function(e) {
                        reject(e);
                    });
                } else {
                    resolve(inbox);
                }
            };
            next(0, []);
        };
    };
}

function createBatch(expressions) {
    return function(resolve, reject) {
        var results = [], next = function(i, outbox) {
            if (i > 0) {
                results.push(outbox);
            }
            if (i < expressions.length) {
                var p = new Promise(expressions[i]([]));
                p.then(function(outbox) {
                    next(i + 1, outbox);
                }, function(e) {
                    reject(e);
                });
            } else {
                resolve(results);
            }
        };
        next(0);
    };
}

parser.exec = function(input) {
    return new Promise(parser.parse(input));
};
