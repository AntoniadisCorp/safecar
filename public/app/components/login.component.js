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
var LoginComponent = (function () {
    function LoginComponent(route, router, authService, alertService, eventsService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.eventsService = eventsService;
        this.model = { message: '' };
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(function (user) {
            _this.model = user;
            _this.loading = false;
            if (user && _this.model.message) {
                _this.alertService.error(_this.model.message);
                _this.router.navigate([_this.returnUrl + 'login']);
            }
            else {
                if (_this.authService.isLoggedIn) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    var redirect = _this.returnUrl = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/';
                    console.log("Return Url " + _this.returnUrl);
                    _this.eventsService.broadcast('loggedin', _this.model.Firstname, _this.model.Lastname);
                    // Redirect the user
                    _this.router.navigate([redirect]);
                }
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
            _this.router.navigate([_this.returnUrl + 'login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: '../../views/ng_partials/login.ejs'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService, index_1.EventsService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map