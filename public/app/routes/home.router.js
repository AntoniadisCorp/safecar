"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../_guards/index");
var index_2 = require("../components/index");
// Route Configuration
exports.HomeRoutes = [
    { path: 'home', component: index_2.HomeListComponent },
    { path: 'carboard/:id', component: index_2.CarboardListComponent, canDeactivate: [index_1.DeAuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_2.RegisterListComponent /*, canLoad: [CanLoadGuard]*/ }
];
//# sourceMappingURL=home.router.js.map