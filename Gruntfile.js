'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        recess: {
            options: {
                compile: true,
                includePath: ['ploneorg/theme/diazo_resources/bootstrap/less']
            },
            main: {
                src: ['ploneorg/theme/diazo_resources/less/main.less'],
                dest: 'ploneorg/theme/diazo_resources/stylesheets/main.css'
            },
            bootstrap: {
                // options: {
                //   compress: true
                // },
                src: ['ploneorg/theme/diazo_resources/bootstrap/less/bootstrap.less'],
                dest: 'ploneorg/theme/diazo_resources/stylesheets/bootstrap.css'
            }
        },
        watch: {
            scripts: {
                files: ['ploneorg/theme/diazo_resources/less/*.less',
                        'ploneorg/theme/diazo_resources/bootstrap/less/*.less'],
                tasks: ['recess']
            }
        }
    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-recess');
    grunt.registerTask('default', ['recess']);
};
