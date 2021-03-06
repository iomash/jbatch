module.exports = function(grunt) {
    grunt.initConfig({
        jison: {
            jbatch: {
                options: {
                    moduleType: 'amd'
                },
                files: {
                    'src/lib/jbatchParser/jbatchParser.js': 'src/lib/jbatchParser/jbatchParser.jison'
                }
            }
        },
        requirejs: {
            options: {
                baseUrl: 'src',
                name: 'app',
                include: 'requireLib',
                skipModuleInsertion: true,
                paths: {
                    jbatchParser: 'lib/jbatchParser/jbatchParser',
                    domready: 'ext/domready/domready-1.0.4',
                    'es6-promise': 'ext/es6-promise/es6-promise-2.0.1',
                    requireLib: 'ext/requirejs/require-2.1.16',
                }
            },
            minified: {
                options: {
                    out: 'dist/jbatch.min.js',
                    preserveLicenseComments: false
                }
            },
            debug: {
                options: {
                    out: 'dist/jbatch.js',
                    optimize: 'none'
                }
            }
        },
        file_append: {
            default_options: {
                files: [
                    {
                        prepend: '/*! jBatch | Copyright 2015 iomash.com | http://jbatch.iomash.com/license.txt */\n\n',
                        input: 'dist/jbatch.min.js'
                    },
                    {
                        prepend: '/*! jBatch | Copyright 2015 iomash.com | http://jbatch.iomash.com/license.txt */\n\n',
                        input: 'dist/jbatch.js'
                    }
                ]
            }
        },
        uglify: {
            cmds: {
                src: 'src/cmd/**/*.js',
                dest: 'dist',
                expand: true,
                flatten: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-jison');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-file-append');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jison', 'requirejs', 'file_append', 'uglify']);
};
