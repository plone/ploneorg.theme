Introduction
============

This is the skeleton of the package corresponding to the 2014 Revamp for
plone.org Diazo Theme.

Development
-----------
VIC

The theme is based on Bootstrap 3. CSS resources are developed using LESS, tied
to some of the original Bootstrap 3 LESS sources. At the moment of writing this
documentation, we are working with the default Bootstrap 3 minified CSS and
later a generated CSS for the whole project (main.css).

To start developing the theme you can use the grunt tasks defined in the main
package::

    $ cd project_folder/src/ploneorg.theme
    $ npm install
    $ grunt watch

You'll need nodejs and npm available somewhere available in your environment
PATH.

The *grunt watch* command will look for changes into the less folder and when
they happen will trigger a compilation of the main.less file into the main.css
file.

The less files are located inside the diazo_resources in the less folder, and
the compiled ones in the css folder.
