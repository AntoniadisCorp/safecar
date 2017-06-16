"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        template: "\n          <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"error-template\">\n                        <h1>\n                            Oops!</h1>\n                        <h2>\n                            404 Page Not Found</h2>\n                        <div class=\"error-details\">\n                            Sorry, an error has occured, Requested page not found!\n                        </div>\n                        <div class=\"error-actions\">\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                                Take Me Home </a><a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>",
        styles: ["body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\n.error-template {padding: 40px 15px;text-align: center;}\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }"]
    })
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=not-found.component.js.map