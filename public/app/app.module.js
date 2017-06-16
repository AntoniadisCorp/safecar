"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
require("hammerjs");
// Routing Module
var app_routes_1 = require("./app.routes");
// Material Module and fonts
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var material_1 = require("@angular/material");
// Auth Guard
var index_1 = require("./_guards/index");
var index_2 = require("./services/index");
// Components
var app_component_1 = require("./app.component");
var index_3 = require("./components/index");
// import { PetService }       from './pet.service'
var index_4 = require("./services/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            app_routes_1.RoutingModule,
            angular2_fontawesome_1.Angular2FontawesomeModule,
            material_1.MaterialModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_3.TaskComponent,
            index_3.SocketComponent,
            index_3.MenuComponent,
            index_3.FooterComponent,
            index_3.HomeListComponent,
            index_3.PageNotFoundComponent,
            index_3.LoginComponent,
            index_3.RegisterListComponent,
            index_3.CarboardListComponent,
            index_3.AlertComponent
        ],
        providers: [
            //PetService
            index_1.AuthGuard,
            index_1.DeAuthGuard,
            index_2.AuthenticationService,
            index_4.WindowRef
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map