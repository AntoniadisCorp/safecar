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
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/animations': "npm:@angular/animations/bundles/animations.umd.js",
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      '@angular/material':         'npm:@angular/material/bundles/material.umd.js',
      '@angular/cdk':              'npm:@angular/cdk/bundles/cdk.umd.js',
      '@angular/animations':         'npm:@angular/animations/bundles/animations.umd.js',
       // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'angular2-fontawesome':      'npm:angular2-fontawesome',
      '@angular/material':         'npm:@angular/material/bundles/material.umd.js',
      '@angular/cdk':              'npm:@angular/cdk/bundles/cdk.umd.js',
      'hammerjs':                  'npm:hammerjs/hammer.js',
      'leaflet' :                  'npm:leaflet/dist/leaflet.js',
      '@angular/flex-layout' : 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      'hammerjs':                  'npm:hammerjs/hammer.js',

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
      },
      'leaflet': {
        format:'cjs',
        defaultExtension: 'js'
      }
    }
  });
})(this);