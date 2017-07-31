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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var LoginComponent = (function () {
    function LoginComponent(route, router, authService, alertService, eventsService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.eventsService = eventsService;
        // [- ]?
        this.model = { regex: /^(\+\d{1,3}?)?\d{10}?|([a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)+)$/gm };
        this.result = { message: '' };
        this.loading = false;
        this.show = true;
        this.greeting = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.toggleShow = function () {
        this.show = !this.show;
        this.input.nativeElement.type = this.show ? 'text' : 'password';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.signin(this.model.username, this.model.password)
            .subscribe(function (user) {
            _this.result = user;
            _this.loading = false;
            if (user && _this.result.message) {
                _this.alertPopover({ greeting: 'Give your email or mobile phone' });
                _this.router.navigate([_this.returnUrl + 'login']);
            }
            else {
                if (_this.authService.isLoggedIn) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    var redirect = _this.returnUrl = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/';
                    console.log("Return Url " + _this.returnUrl);
                    _this.eventsService.broadcast('loggedin', _this.result.Firstname, _this.result.Lastname, _this.result._id);
                    // Redirect the user
                    _this.router.navigate([redirect]);
                }
            }
            // remove error alert box
            setTimeout(function () { _this.result.message = ''; }, 3000);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
            _this.router.navigate([_this.returnUrl + 'login']);
        });
    };
    LoginComponent.prototype.alertPopover = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        core_1.ViewChild('p'),
        __metadata("design:type", ng_bootstrap_1.NgbPopover)
    ], LoginComponent.prototype, "popover", void 0);
    __decorate([
        core_1.ViewChild('showhideinput'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "input", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            styleUrls: ['../../styles/login.scss'],
            templateUrl: '../../views/ng_partials/login.ejs'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_1.AuthenticationService,
            index_1.AlertService, index_1.EventsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map