module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // shell: {
        //     guider: {
        //         command: 'kss-node app/styles/sass/ styleguide --template documentation/kss-template --destination documentation/styleguide'
        //     }
        // },
        kss: {
            options: {
                includeType: 'sass',
                sass: 'app/styles/sass',
                template: 'documentation/kss-template'
            },
            dist: {
                files: {
                    'documentation/styleguide': ['app/styles/sass']
                }
            }
        },
        // copy: {
        //     dev: {
        //         files: [
        //             // copy images
        //             {
        //                 expand: true,
        //                 cwd: 'src',
        //                 src: ['img/**'],
        //                 dest: 'static/'
        //             },
        //         ]
        //     }
        // },
        watch: {
            // sass compilation
            sass: {
                files: ['app/styles/sass/*.scss', 'app/styles/sass/partials/*.scss', 'app/styles/sass/vendor/*.scss'],
                // tasks: ['sass', 'autoprefixer']
                tasks: ['sass']
            },
            // enable LiveReload for css files
            css: {
                files: ['app/styles/css/*.css'],
                options: {
                    livereload: 9000
                }
            },
            // enable LiveReload for html files
            html: {
                files: ['app/*.html'],
                options: {
                    livereload: 9000
                }
            },
            // // enable JS copy
            // copy: {
            //     files: ['src/js/*.js', 'src/img/**'],
            //     tasks: ['copy:dev']
            // }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/styles/css/main.css': 'app/styles/sass/main.scss'
                }
            }
        },
        // uglify: {
        //     all: {
        //         files: {
        //             'static/js/app.min.js': [
        //                 'node_modules/jquery/dist/jquery.js',
        //                 'src/js/plugins.js',
        //                 'src/js/main.js'
        //             ]
        //         }
        //     }
        // },
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 8080,
                    hostname: 'localhost',
                    base: 'app/'
                }
            }
        },
        kraken: {
            options: {
                key: '392a6ec2e40984badb17c88f11d20c25',
                secret: '00167e53c8d24068e73149c941afa866cb6eb48d',
                lossy: true
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'static/img/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'static/img/'
                }]
            }
        },
        // autoprefixer: {
        //     dist: {
        //         files: {
        //             'static/css/main.css': 'static/css/main.css'
        //         }
        //     }
        // }
    });
    // Load the plugin
    // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);
    // grunt.registerTask('default', ['sass', 'connect:server', 'watch']);
    // grunt.registerTask('default', ['sass', 'connect:server', 'copy:dev', 'watch']);
    // SASSS/Compass compilation only
    grunt.registerTask('compile', ['sass']);
    grunt.registerTask('styleguide', ['kss']);
    grunt.registerTask('krak', ['kraken']);
};
