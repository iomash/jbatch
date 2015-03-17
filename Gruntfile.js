module.exports = function(grunt) {
    grunt.initConfig({
        jison: {
            target: {
                options: {
                    moduleType: 'amd'
                },
                files: {
                    'src/lib/jbatchParser/jbatchParser.js': 'src/lib/jbatchParser/jbatchParser.jison'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src',
                    name: 'app',
                    out: 'dist/jbatch.min.js',
                    include: 'requireLib',
                    paths: {
                        jbatchParser: 'lib/jbatchParser/jbatchParser',
                        domready: 'ext/domready/domready-1.0.4',
                        'es6-promise': 'ext/es6-promise/es6-promise-2.0.1',
                        requireLib: 'ext/requirejs/require-2.1.16',
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jison');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jison', 'requirejs']);
};
