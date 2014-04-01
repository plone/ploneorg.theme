
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            main: {
                options: {
                  paths: ['ploneorg/theme/diazo_resources/bootstrap/less'],
                  strictMath: false,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: '/++theme++ploneorg.theme/stylesheets/main.css.map',
                  sourceMapFilename: 'ploneorg/theme/diazo_resources/stylesheets/main.css.map'
                },
                files: {
                  'ploneorg/theme/diazo_resources/stylesheets/main.css': 'ploneorg/theme/diazo_resources/less/main.less'
                }
            },
            topbar: {
                options: {
                  paths: ['ploneorg/theme/diazo_resources/bootstrap/less'],
                  strictMath: false,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: '/++theme++ploneorg.theme/stylesheets/topbar.css.map',
                  sourceMapFilename: 'ploneorg/theme/diazo_resources/stylesheets/topbar.css.map'
                },
                files: {
                  'ploneorg/theme/diazo_resources/stylesheets/topbar.css': 'ploneorg/theme/diazo_resources/less/topbar.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['ploneorg/theme/diazo_resources/less/*.less',],
                tasks: ['less']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : ['ploneorg/theme/diazo_resources/stylesheets/*.css',
                           '../genweb.portlets/genweb/portlets/browser/*.css']
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "http://localhost:8081"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt.registerTask('default', ['less']);
    grunt.registerTask('default', ["browserSync", "watch"]);
};
