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
var animations_1 = require("@angular/platform-browser/animations");
var flex_layout_1 = require("@angular/flex-layout");
var common_1 = require("@angular/common");
var material_2 = require("@angular/material");
// Auth Guard
// import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
// import { AuthenticationService } from './services/index'
// Components
var app_component_1 = require("./app.component");
var index_1 = require("./components/index");
var index_2 = require("./services/index");
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
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule,
            flex_layout_1.FlexLayoutModule,
            common_1.CommonModule,
            material_2.MdTabsModule,
            material_2.MdCardModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.TaskComponent,
            index_1.SocketComponent,
            index_1.MenuComponent,
            index_1.FooterComponent,
            index_1.HomeListComponent,
            index_1.PageNotFoundComponent,
            index_1.LoginComponent,
            index_1.RegisterListComponent,
            index_1.CarboardListComponent,
            index_1.AlertComponent,
            index_1.MapComponent
        ],
        providers: [
            //PetService
            index_2.WindowRef
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map