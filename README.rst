Introduction
============

This is the Diazo theme package of the the 2014 reboot of plone.org site
project.

Development
-----------

The theme is based on Bootstrap 3.1. CSS resources are developed using LESS,
tied to some of the original Bootstrap 3 LESS sources. At the moment of writing
this documentation, we are working with the default Bootstrap 3 minified CSS and
a specific set of LESS files compiled into a single CSS file for the whole
project (main.css). We are using the (new) LESS 1.6.x feature that allows to
import by reference the original BS3.1 LESS source files in case you might want
to extend some of the BS resources or make use of the BS variables and mixins.

To start developing the theme you can use the grunt tasks defined in the main
package::

    $ cd project_folder/src/ploneorg.theme
    $ npm install grunt-cli -g
    $ npm install
    $ grunt watch

You need nodejs and npm available somewhere available in your environment PATH.

The *grunt watch* command will look for changes into the project LESS folder and
when they happen it will trigger the compilation of the main.less file into the
main.css file.

The less files are located inside the diazo_resources in the less folder, and
the compiled ones in the css folder.
