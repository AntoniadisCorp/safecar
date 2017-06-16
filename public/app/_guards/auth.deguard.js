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
// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }
var DeAuthGuard = (function () {
    function DeAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DeAuthGuard.prototype.canDeactivate = function (component, route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    DeAuthGuard.prototype.checkLogin = function (url) {
        var _this = this;
        return this.authService.getLoggedIn()
            .map(function (res) { return _this.authService.isLoggedIn = res; })
            .take(1)
            .do(function (allowed) {
            console.log('deaut allowed:', allowed);
            if (allowed)
                _this.router.navigate(['/']);
        });
    };
    return DeAuthGuard;
}());
DeAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AuthenticationService, router_1.Router])
], DeAuthGuard);
exports.DeAuthGuard = DeAuthGuard;
//# sourceMappingURL=auth.deguard.js.map