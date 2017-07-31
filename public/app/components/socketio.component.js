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
var SocketComponent = (function () {
    function SocketComponent() {
        this.price = 0.0;
        this.socket = null;
        this.bidValue = '';
    }
    SocketComponent.prototype.bid = function () {
        this.socket.emit('bid', this.bidValue);
        this.bidValue = '';
    };
    SocketComponent.prototype.ngOnInit = function () {
        this.socket = io('https://localhost:3000');
        this.socket.on('priceUpdate', function (data) {
            this.price = data;
            console.log('Socket io Started..');
        }.bind(this));
    };
    SocketComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'auction-app',
            templateUrl: '../../views/ng_partials/socketio.ejs'
        }),
        __metadata("design:paramtypes", [])
    ], SocketComponent);
    return SocketComponent;
}());
exports.SocketComponent = SocketComponent;
//# sourceMappingURL=socketio.component.js.map