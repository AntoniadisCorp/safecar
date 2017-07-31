"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("./routes/index");
var index_2 = require("./components/index");
var index_3 = require("./_guards/index");
var index_4 = require("./services/index");
// import { FeatureRoutes }  from './routes/feature.router';
// Route Configuration
exports.appRoutes = index_1.HomeRoutes.concat([
    //...FeatureRoutes,
    {
        path: '',
        component: index_2.HomeListComponent,
        // redirectTo: '/', 
        pathMatch: 'full'
    },
    { path: '**', component: index_2.PageNotFoundComponent }
]);
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(exports.appRoutes)
            ],
            providers: [
                index_3.AuthGuard,
                index_4.AuthenticationService,
                index_3.DeAuthGuard,
                index_3.CanLoadGuard,
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=app.routes.js.map