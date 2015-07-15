# Angular.js Composer (angular-composer)

Node/Gulp package that simplifies your gulpfile for large scale Angular.js applications.

# Introduction

Building a large scale Angular.js application requires that you separate your whole app into
various modules (features) that are dynamically loaded in the browser. Additionally when you
work on a large project, it becomes important to have a fast and agile build process that
does not become slow as your project grows.

**Angular.js Composer** will automatically build individual modules, each with their own separate
scripts, styles, html templates, images and other resources, such as fonts.

With simple configuration and the use of a few conventions, you can with minimal code get up
and running with a fairly complex build workflow for your Angular.js applications.

# Source Structure

Path to these folders are configureable, these are the defaults:

* src/ - Contains all source code and assets for all modules, including unit tests.
* src/lib.js - Contains require('') calls to load dependent node packages, e.g. require('angular');.
* src/lib.scss - Contains imports to load dependent style sheets from node_modules folder.
* src/[folder] - Contains all assets for a module, supports sub-folders as well.
* wwwroot/ - Output directory for the index.html file.
* wwwroot/modules/ - Output directory for your modules, including the main "app" module.
* wwwroot/libs/ - Output directory for vendor/external dependencies, both script and styles. 
* wwwroot/fonts/ - For optimization, there is a shared fonts output shared across all modules.

# What is generated?

Each module (folder) results in one distinct script file and one style file. These can be
lazy (dynamically) loaded by your Angular.js application, or manually included in index.html.

All output files are generated as both concatinated files and minified copies that are optimized
for production deployment.

As both scripts and styles have source maps (flags that allows browser to know source file for
functions and classes), it's adviced that you load and rely on the minified version of files even
during development. This ensure you properly test the production copy of files, and avoid any
suprises that might happen during minification processing of scripts and styles.

# Workflow

After running the .start() method on the Angular.js Composer library, you can proceed by working
on your assets within the src/ folder and changes will automatically be picked up and processed
for you. Additionally if you have browsers active with the BrowserSync URL that appears in the
console output, then updates will automatically update in your browsers.

Each major asset type is compiled completely for each module, this is because concatination of
files happens on a module (folder) level. If you modify a script file, it will remove the
existing e.g. wwwroot/module/settings/setting.js file and replace with a newly built one.

# Dependencies
* [gulp](http://gulpjs.com/) - Build engine
* [jshint](http://www.jshint.com/) - JavaScript linter
* [uglify](https://github.com/mishoo/UglifyJS2/) - JavaScript minifier
* [browserify](http://browserify.org/) - Bundles CommonJS modules

# Alternatives

[boilerplate-gulp-angular](https://github.com/unsetbit/boilerplate-gulp-angular) is another similar 
project which does a lot of things differently, but is still based around the same concept.


MIT © [Sondre Bjellås](http://sondreb.com)