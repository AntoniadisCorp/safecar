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
var index_1 = require("../classes/index");
var index_2 = require("../services/index");
var RegisterListComponent = (function () {
    function RegisterListComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        // initialize User interface
        this.user = { information: new index_1.User() };
        // Register Validation
        this.pattern = {};
        // left menu variable
        this.leftmenu = { selected: '', stepisDisabled: [] };
        // initialization
        this.Hiddencard = [];
        // initialize WindowRef
        this.win = new index_1.Scrollspy();
        // init birthday
        this.birthday = new Array();
    }
    RegisterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // --- initialize User data ---
        this.pattern.Firstname = /^[α-ωΑ-Ωά-ώΆ-Ώ]*$/; // a-zA-Z for english
        this.pattern.Lastname = this.pattern.Firstname;
        this.pattern.email = /^([a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)+)$/;
        this.pattern.mobile = /^69(\d{8}$)/; // (\+\d{1,3}?)? for country code like +30
        /*
                # Start of group
                (?=.*\d)		  #   must contains one digit from 0-9
                (?=.*[a-z])		#   must contains one lowercase characters
                (?=.*[A-Z])		#   must contains one uppercase characters
                (?=.*[@#$%])	#   must contains one special symbols in the list "@#$%"
                .		          #     match anything with previous condition checking
                {6,20}	#        length at least 6 characters and maximum of 20
              # End of group
        */
        this.pattern.password = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&'*+/=?^_`{|}~.-]).{6,20})$/;
        // initialize Birthday
        this.birthday.push(this.user.information.day);
        this.birthday.push(this.user.information.month);
        this.birthday.push(this.user.information.year);
        // -----------------------------
        // set hidden cards to true
        this.Hiddencard[0] = true;
        this.Hiddencard[1] = false;
        this.Hiddencard[2] = false;
        // initialize text of the button
        this.ButtonText = ['Επόμενο Βήμα', 'Επόμενο Βήμα', 'Ολοκλήρωση'];
        this.Buttoncolor = ['success', 'success', 'primary'];
        // go to first card
        setTimeout(function () { return _this.win.smoothScroll('ss' + 1); }, 100); // set 100 ms
        // set leftmenu not active
        this.leftmenu.selected = 'notexit';
        // set leftmenu step check circle and remove fonts
        this.leftmenu.stepisDisabled.push(true);
        this.leftmenu.stepisDisabled.push(true);
        this.leftmenu.stepisDisabled.push(true);
    };
    RegisterListComponent.prototype.NextCard = function (card) {
        var _this = this;
        this.Hiddencard[card] = (card < 3) ? true : false;
        setTimeout(function () { return _this.win.smoothScroll('ss' + (card + 1)); }, 100); // set 100 ms
        // console.log(`card: ${card}`)
    };
    RegisterListComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        // first delete unwill properties of class user
        delete this.user.information.day["name"];
        delete this.user.information.day["what"];
        delete this.user.information.month["name"];
        delete this.user.information.month["what"];
        delete this.user.information.year["name"];
        delete this.user.information.year["what"];
        var userdata = this.user.information;
        console.log(JSON.stringify(userdata));
        // Service to send data to node server with http response
        this.userService.create(userdata)
            .subscribe(function (user) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            console.log("Register Response: ", user);
            if (user.message)
                _this.alertService.error(user.message);
            else
                _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterListComponent;
}());
RegisterListComponent = __decorate([
    core_1.Component({
        templateUrl: '../../views/ng_partials/regProfile.ejs',
        styleUrls: ['../../styles/register.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_2.UserService,
        index_2.AlertService])
], RegisterListComponent);
exports.RegisterListComponent = RegisterListComponent;
//# sourceMappingURL=register.component.js.map