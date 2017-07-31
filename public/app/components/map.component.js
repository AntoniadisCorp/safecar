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
// leaflet maps
// 
var L = require("leaflet");
// declare let leaflet: any
// console.log(leaflet)
var MapComponent = (function () {
    function MapComponent(element, myrender) {
        this.element = element;
        this.myrender = myrender;
    }
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent.prototype.ngAfterViewInit = function () {
        var el = this.element.nativeElement; // querySelector('map');
        this.map = new L.Map(el.querySelector('map'), { zoomControl: true });
        // remove from md card 'class' attribute 
        this.myrender.setElementAttribute(el.querySelector('md-card'), 'class', null);
        this.map.setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        var circle = L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(this.map), polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this.map);
        L.marker([51.5, -0.09]).addTo(this.map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'leaflet',
            template: "<md-card ><map class=\"mat-card mat-elevation-z\" id=\"mapid\"></map></md-card>",
            styleUrls: ['../../styles/map.scss']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map