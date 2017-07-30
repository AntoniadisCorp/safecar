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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.User = { _id: '' };
        console.log('AuthenticationService is Inititialized..');
        // this.sub = Observable.interval(10000).map(x => JSON.parse(localStorage.getItem('currentUser'))._id? true : false)
        //       .subscribe(x => { this.isLoggedIn = x, console.log(`isLoggedIn ${this.isLoggedIn}`) })
    }
    AuthenticationService.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // this.sub.unsubsribe()
    };
    AuthenticationService.prototype.getLoggedIn = function () {
        var _this = this;
        return this.http.get('/auth/loggedIn').map(function (response) {
            var res = response.json(), localst = JSON.parse(localStorage.getItem('currentUser')), loggedin = localst !== null && localst._id !== {} ? true : false;
            _this.isLoggedIn = false;
            if (res && res.status && loggedin)
                _this.isLoggedIn = res.status;
            return _this.isLoggedIn;
        });
    };
    AuthenticationService.prototype.signin = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers(); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type', 'application/json');
        return this.http.post('/auth/login', JSON.stringify({ username: username, password: password }), new http_1.RequestOptions({ headers: headers })).map(function (response) {
            // login successful if there's a jwt token in the response
            _this.User = response.json();
            console.log("response on login: " + JSON.stringify(_this.User));
            if (_this.User && _this.User._id) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(_this.User));
                _this.isLoggedIn = true;
                return _this.User;
            }
            _this.isLoggedIn = false;
            return _this.User;
        });
    };
    AuthenticationService.prototype.logout = function () {
        return this.http.get('/auth/logout').map(function (response) {
            var res = response.json(), loggedin = JSON.parse(localStorage.getItem('currentUser'));
            console.log("Loging out.. " + localStorage.getItem('currentUser'));
            if (res && loggedin._id) {
                // remove user from local storage to log user out
                localStorage.removeItem('currentUser');
            }
            return res;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map