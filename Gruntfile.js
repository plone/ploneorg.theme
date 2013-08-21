'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        recess: {
            options: {
                compile: true
            },
            files: {
                src: ['ploneorg/theme/diazo_resources/less/main.less'],
                dest: 'ploneorg/theme/diazo_resources/stylesheets/main.css'
            }
        },
        watch: {
            scripts: {
                files: 'ploneorg/theme/diazo_resources/less/*.less',
                tasks: ['recess']
            }
        }
    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-recess');
    grunt.registerTask('default', ['recess']);
};
