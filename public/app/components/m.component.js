"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../services/index");
var MenuComponent = (function () {
    function MenuComponent(renderer, authService, alertService, router, eventsService) {
        var _this = this;
        this.renderer = renderer;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.eventsService = eventsService;
        //collapse content
        this.collapse = {
            NavbarisCollapsed: false,
            searchisCollapsed: false,
            sbtn: ''
        };
        this.custommerStr = {};
        eventsService.on('loggedin', function (a, b) {
            alertService.success("User " + a + " " + b + " connected");
            _this.loginListener();
        });
    }
    MenuComponent.prototype.setHeight = function (el, height) {
        this.renderer.setElementStyle(el, 'height', height + 'px'), this.loginListener();
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.collapse.NavbarisCollapsed = !this.collapse.NavbarisCollapsed;
        this.collapse.searchisCollapsed = !this.collapse.searchisCollapsed;
        this.loginListener();
    };
    MenuComponent.prototype.onNavbar = function () {
        this.collapse.NavbarisCollapsed = !this.collapse.NavbarisCollapsed;
    };
    MenuComponent.prototype.onSearch = function () {
        this.collapse.searchisCollapsed = !this.collapse.searchisCollapsed;
    };
    MenuComponent.prototype.goToHome = function () { this.router.navigate(['/home']); };
    MenuComponent.prototype.goToCarboard = function (id) { this.router.navigate(['/product-details', id]); };
    MenuComponent.prototype.goToRegistration = function () { this.router.navigate(['/register']); };
    MenuComponent.prototype.login = function () { this.router.navigate(['/login']), this.loginListener(); };
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) { _this.alertService.success('User ' + data), _this.loginListener(); }, function (error) { _this.alertService.error(error + ' User Disconnected'), _this.loginListener(); });
    };
    MenuComponent.prototype.logInOutAction = function () {
        if (this.authService.isLoggedIn) {
            this.logout(), this.loginListener();
        }
        else
            this.login();
    };
    MenuComponent.prototype.loginListener = function () {
        var _this = this;
        this.authService.getLoggedIn()
            .subscribe(function (data) {
            console.log(data);
            _this.custommerStr = data ? { status: 'logout', color: 'warning' }
                : { status: 'login', color: 'primary' };
        }, function (error) { return _this.alertService.error(error + ' on getting LoggedIn'); });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'navig',
        templateUrl: '../../views/main_partials/header.ejs',
        animations: [
            core_1.trigger('myAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(100%)', opacity: 0 }),
                    core_1.animate('500ms', core_1.style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0)', 'opacity': 1 }),
                    core_1.animate('500ms', core_1.style({ transform: 'translateX(100%)', opacity: 0 })),
                ])
            ])
        ],
        styleUrls: ['../../styles/header.scss']
    }),
    __metadata("design:paramtypes", [core_1.Renderer, index_1.AuthenticationService,
        index_1.AlertService, router_1.Router, index_1.EventsService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=m.component.js.map