module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Catch `Source file not found.` warnings and fail HARD.
    var gruntLogWarn = grunt.log.warn;
    grunt.log.warn = function(err) {
      var patt = new RegExp("^Source file (.*) not found.$");
      if (patt.test(err)) {
        grunt.fail.warn(err);
      } else {
        gruntLogWarn(err);
      }
    };

    grunt.initConfig({

        sass: {
            options: {
                outputStyle: 'compressed', // [compressed | nested]
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        src: 'sass/main.scss',
                        dest: 'static/main.css',
                        nonull: true
                    },
                    {
                        src: 'sass/editor.scss',
                        dest: 'static/editor.css',
                        nonull: true
                    },
                    // Font Awesome TinyMCE plugin stylesheet.
                    {
                        expand: true,
                        cwd: 'bower_components/TinyMCE-FontAwesome-Plugin/fontawesome/',
                        src: ['css/fontawesome.min.css'],
                        dest: 'static/fontawesome/plugin',
                        nonull: true
                    }
                ]
            }
        },

        less: {
          production: {
            options: {
              sourceMap: true
//              paths: ["assets/css"]
//              ,
//              modifyVars: {
//                imgPath: '"http://mycdn.com/path/to/images"',
//                bgColor: 'red'
//              }
            },
            files: {
              "static/barceloneta.css": "less/custom_barceloneta/barceloneta.less"
            }
          }
        },

        // Check this Gruntfile and all js in the scripts dir
        // if they are valid js. jshint settings are stored in `.jshintrc`
        jshint: {
          files: ['Gruntfile.js', 'scripts/*.js'],
          options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
          }
        },

        uglify: {
            options: {
//                mangle: false,
                beautify: false,   // Default false.
                preserveComments: 'some'  // https://github.com/gruntjs/grunt-contrib-uglify#preservecomments
            },
            my_target: {
                files: [
                  {
                      src: [
                        //
                        // Only uncomment required js.
                        //

                        // TODO: We don't need jQuery in the theme if we use Plone.
                        // This jquery only during theme development.
//                        'bower_components/jquery/dist/jquery.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
//                        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
                      ],
                      dest: 'static/bootstrap.js',
                      nonull: true
                  },
                  {
                      src: [
                        'js/ploneorg.js'
                      ],
                      dest: 'static/main.js',
                      nonull: true
                  },
                  // Font Awesome TinyMCE plugin.
                  // Uglify (not copy) these so we can change the file names.
                  {
                      src: [
                        'bower_components/TinyMCE-FontAwesome-Plugin/fontawesome/plugin.min.js'
                      ],
                      dest: 'static/fontawesome/plugin/fontawesome.js',
                      nonull: true
                  },
                  {
                      src: [
                        'bower_components/TinyMCE-FontAwesome-Plugin/fontawesome/langs/en.js'
                      ],
                      dest: 'static/fontawesome/plugin/langs/en.js',
                      nonull: true
                  }
                ]
            }
        },

        copy: {
          main: {
            files: [
              //
              // Copy fontawesome fonts.
              //
              // Will fail silently if source files are missing due to wildcard.

              {
                  expand: true,
                  cwd: 'bower_components/',
                  src: ['fontawesome/fonts/*'],
                  dest: 'static/',
                  filter: 'isFile'
              },

              //
              // Copy Roboto fonts.
              //
              // Will fail silently if source files are missing due to wildcard.

              {
                  expand: true,
                  cwd: 'bower_components/roboto-fontface/fonts',
                  src: ['*'],
                  dest: 'static/roboto/',
                  filter: 'isFile'
              }

            ]
          }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            uglify: {
                files: ['js/ploneorg.js'],
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.registerTask('default', [
          'watch'
    ]);

    grunt.registerTask('build', [
        'less',
        'sass',
        'jshint',
        'uglify',
        'copy'
    ]);
};
