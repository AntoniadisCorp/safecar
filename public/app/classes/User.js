"use strict";
/**
 * User interface date
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User class UserBirthday
 */
var UserBirthday = (function () {
    function UserBirthday() {
        // initialize object Date
        this.timeregister = new Date();
        this.day = {
            title: '',
            what: 'Ημέρα',
            name: []
        },
            this.month = {
                title: '',
                what: 'Μήνας',
                name: [
                    { value: 'Ιανουαρίου' },
                    { value: 'Φεβρουαρίου' },
                    { value: 'Μαρτίου' },
                    { value: 'Απριλίου' },
                    { value: 'Μαίου' },
                    { value: 'Ιουνίου' },
                    { value: 'Ιουλίου' },
                    { value: 'Αυγούστου' },
                    { value: 'Σεπτεμβρίου' },
                    { value: 'Οκτωβρίου' },
                    { value: 'Δεκεμβρίου' }
                ]
            },
            this.year = {
                title: '',
                what: 'Έτος',
                name: []
            };
        this.setDay(this.day);
        // this.setMonth(this.month)
        this.setYear(this.year);
    }
    UserBirthday.prototype.setDay = function (dateobj) {
        // initialize days
        for (var i = 0; i < 31; i++)
            dateobj.name.push({ value: i + 1 });
    };
    // private setMonth(dateobj: date) {
    // }
    UserBirthday.prototype.setYear = function (dateobj) {
        // get full current year
        var today = this.timeregister.getFullYear();
        // initialize years
        for (var i = today; i >= today - 100; i--)
            dateobj.name.push({ value: i });
    };
    return UserBirthday;
}());
exports.UserBirthday = UserBirthday;
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this) || this;
    }
    return User;
}(UserBirthday));
exports.User = User;
//# sourceMappingURL=User.js.map