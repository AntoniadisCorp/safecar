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
var CarboardListComponent = (function () {
    function CarboardListComponent(route, router /*,
        private service: HeroService*/) {
        this.route = route;
        this.router = router; /*,
        private service: HeroService*/
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    CarboardListComponent.prototype.ngOnInit = function () {
        // this.route.params
        //     .switchMap((params: Params) =>
        //     this.service.getHero(params.get('id')))
        //     .subscribe((hero: Hero) => this.hero = hero);
        // this.sub = this.route.params
        // // (+) converts string 'id' to a number
        // .switchMap((params: Params) => this.service.getHero(+params['id']))
        // .subscribe((hero: Hero) => this.hero = hero);
    };
    CarboardListComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe()
    };
    CarboardListComponent = __decorate([
        core_1.Component({
            // selector: 'carboard',
            templateUrl: '../../views/ng_partials/carboard.ejs',
            styleUrls: ['../../styles/carboard.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router /*,
            private service: HeroService*/])
    ], CarboardListComponent);
    return CarboardListComponent;
}());
exports.CarboardListComponent = CarboardListComponent;
//# sourceMappingURL=carboard.component.js.map