/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    baseUrl: "js/lib",
    paths: {
         'angular'          : '../lib/angular/angular'
        ,'angular-route'    : '../lib/angular-route/angular-route'
        ,'domReady'         : '../lib/requirejs-domready/domReady'
        ,'jquery'           : 'jquery'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {

        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
