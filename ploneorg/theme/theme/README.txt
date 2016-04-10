FRONT-END SCAFFOLD
==================

You need to have Node.js installed.

`grunt build` does all tasks once. `grunt watch` watches the files for
changes and executes a task if there is a file change. E.g.: You edit some JS
file, then uglify task is executed on save.

Note: Both commands trigger the same tasks and will lead to the same output.


UNDER THE HOOD
==============

Grunt will do the following:
    - Listen for changes in the development files.
    - Compile SASS, JS and other assets on save.
    - Place the files in the `static` folder to be served.


Here are some extra commands if you need more control than the sh scripts offer.

The Node configuration file (package.json) and Bower configuration file
(bower.json) live in the `diazo_resources` directory:

    $ cd <buildout dir>/src/project.theme/project/theme/diazo_resources/


Install the Node modules:

    $ npm install


Add a new Node module (like grunt-contrib-jshint). Use the `--save-dev` flag
to add the module to `packages.json` devDependencies section:

    $ npm install <module_name> --save-dev


Install a Bower component (like jQuery or Bootstrap). Use the `--save` flag
to add the component to `bower.json` dependencies section:

    $ node_modules/bin/bower install <component_name> --save


WORKING WITH SCSS and CSS
-------------------------

Global project variables and Bootstrap variables are defined in:

    `sass/custom_bootstrap/_variables.scss`

We don't want to serve redundant CSS. Explicitly switch on used
Boostrap styles in:

    `sass/custom_bootstrap/_bootstrap.scss`


WORKING WITH JAVASCRIPT
-----------------------

We don't want to serve redundant JS. Explicitly define used Javascripts in:

    `Gruntfile.js`


WORKING WITH OTHER STATIC RESOURCES
-----------------------------------

The `static` directory is tracked in repository. The `node_modules` is in ignore.
Therefore other resources (images and fonts) should be copied via a copy task in
Gruntfile.js to the `static` directory.

We copy only the needed resources from `bower_components` into `static`.
A copy tasks looks something like this:

      {
          expand: true,
          cwd: 'bower_components/TinyMCE-FontAwesome-Plugin/fontawesome/',
          src: ['css/fontawesome.min.css'],
          dest: 'static/fontawesome/plugin',
          nonull: true
      }

`nonull` raises an error when a copy task fails.


WORKING WITH BARCELONETA AND LESS
---------------------------------

Barceloneta is installed as bower component like this:

    $ bower install https://github.com/plone/plonetheme.barceloneta.git#1.6.15 --save

In `less/custom-barceloneta/barceloneta.less` we import the required styles.
In `less/custom-barceloneta/variables.less` we set our custom vars.

