'use strict';

/**
 * ## Build
 * ### Requirements
 * - [Postgresql](http://www.postgresql.org/)
 *
 * #### Setup
 * ```bash
 * $ npm run setup
 * $ npm install
 * ```
 * This installs the following globally:
 * - [Gulp](http://gulpjs.com/)
 * - [Bower](http://bower.io/)
 * - [Node Foreman](http://strongloop.github.io/node-foreman/)
 * - [Node Inspector](https://github.com/node-inspector/node-inspector)
 *
 * Add a file called `.env` to the root of the project with the following contents:
 * ```json
 * {
 *     "node": {
 *         "env": "dev"
 *     }
 * }
 * ```
 * You can now run the development server by running the following commands:
 * ```bash
 * $ npm start
 * ```
 *
 * - You can now visit [http://localhost:8081/](http://localhost:8081/) to view changes live.
 *
 * #### Directories
 * - `src/client` - clientside html, scripts, and styles
 * - `src/server` - serverside scripts and sql queries
 *
 * #### Serverside runtime
 * - Uses dependency injection from [Nodep](http://nodep.org)
 *
 * ### Running the test suite
 * #### Single Run:
 * ```bash
 * $ gulp test
 * ```
 * #### Continuous testing when files are changed:
 * ```bash
 * $ gulp autotest
 * ```
 * ### Generating README.md
 * ```bash
 * $ gulp docs
 * ```
 * ### Generating CHANGELOG.md
 * ```bash
 * $ gulp changelog
 * ```
 * ### Notes
 * - jshint is part of the test suite and should be kept clean
 * - Commits should have high test coverage
 * - Docs should be kept up to date
 * - Additions should come with documentation
 * - commit messages should follow [conventional format](https://github.com/ajoslin/conventional-changelog/blob/master/conventions/angular.md)
 * @module contributing
 */

var gulp = require('gulp');
require('gulp-begin')(gulp, {
    client: {
        scripts: {
            lib: [
                'lodash/lodash.js',
                'angular/angular.js',
                'angular-md5/angular-md5.js',
                'angular-colorthief/angular-colorthief.js',
                'color-thief/src/color-thief.js',
                'ng-file-upload/ng-file-upload.js',
                'angular-route/angular-route.js',
                'angular-animate/angular-animate.js',
                'angular-sanitize/angular-sanitize.js',
                'angular-stripe-checkout/angular-stripe-checkout.js'
            ]
        },
        styles: {
            main: ['styles.scss'],
            include: {
                lib: [
                    //path.join(paths.client, 'styles'),
                    'bootstrap-sass/assets/stylesheets',
                    'frow/sass'
                ]
            }
        },
        images: {
            src: ['**/*.png', '**/*.jpg', '**/*.PNG', '**/*.JPG']
        }
    }
});

gulp.task('default', ['dev']);
