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
/**
 *  Documentation
 *
 * @param  {class} UserService In order To create new User
 */
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        console.log('User Service Inititialized...');
        // initialize user
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/auth/users', this.jwt()).map(function (res) { return res.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/auth/users/' + id, this.jwt()).map(function (res) { return res.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/auth/signup', JSON.stringify({ user: user, username: user.mobile, password: '123123' }), this.jwt()).map(function (res) { return res.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/auth/users/' + user._id, user, this.jwt()).map(function (res) { return res.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/auth/users/' + id, this.jwt()).map(function (res) { return res.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(currentUser)
        //if (currentUser && currentUser.token) {
        var headers = new http_1.Headers(); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type', 'application/json');
        return new http_1.RequestOptions({ headers: headers });
        // }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map