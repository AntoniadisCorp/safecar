/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({

  //   //use typescript for compilation
  // transpiler: 'typescript',
  // //typescript compiler options
  // typescriptOptions: {
  //     // Copy of compiler options in standard tsconfig.json
  //     "target": "es5",
  //     "module": "es2015",
  //     "moduleResolution": "node",
  //     "sourceMap": true,
  //     "emitDecoratorMetadata": true,
  //     "experimentalDecorators": true,
  //     "noImplicitAny": true,
  //     "suppressImplicitAnyIndexErrors": true
  // },
  // meta: {
  //     'typescript': {
  //       "exports": "ts"
  //     }
  //   },  
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/animations': "npm:@angular/animations/bundles/animations.umd.min.js",
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.min.js',
      '@angular/flex-layout' : 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      '@angular/material':         'npm:@angular/material/bundles/material.umd.min.js',
      '@angular/cdk':              'npm:@angular/cdk/bundles/cdk.umd.min.js',
      'socket.io-client':          'npm:socket.io-client/socket.io.min.js',
       // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'angular2-fontawesome':      'npm:angular2-fontawesome',
      'hammerjs':                  'npm:hammerjs/hammer.min.js',
      'leaflet' :                  'npm:leaflet/dist/leaflet.js',

      /*  // angular bundles
      '@angular/core': 'npm:core.umd.min.js',
      '@angular/common': 'npm:common.umd.min.js',
      '@angular/compiler': 'npm:compiler.umd.min.js',
      '@angular/animations': "npm:animations.umd.min.js",
      '@angular/animations/browser': 'npm:animations-browser.umd.min.js',
      '@angular/platform-browser': 'npm:platform-browser.umd.min.js',
      '@angular/platform-browser/animations': 'npm:platform-browser-animations.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:http.umd.min.js',
      '@angular/router': 'npm:router.umd.min.js',
      '@angular/forms': 'npm:forms.umd.min.js',
      '@angular/upgrade': 'npm:upgrade.umd.min.js',
      '@angular/material':         'npm:material.umd.min.js',
      '@angular/cdk':              'npm:cdk.umd.min.js',
      '@angular/flex-layout' :     'npm:flex-layout.umd.min.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:ng-bootstrap.js',

      // other libraries
      'rxjs':                      'npm:Rx.min.js',
      'angular-in-memory-web-api': 'npm:in-memory-web-api.umd.min.js',
      'angular2-fontawesome':      'npm:angular2-fontawesome.umd.min.js',
      'hammerjs':                  'npm:hammer.min.js',
      'leaflet' :                  'npm:leaflet.js', */

      // further angular bundles
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-fontawesome': { 
        defaultExtension: 'js'
      }
    }
  });
})(this);