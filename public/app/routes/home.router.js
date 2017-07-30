"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../_guards/index");
var index_2 = require("../components/index");
// Route Configuration
exports.HomeRoutes = [
    { path: 'carboard/:id', component: index_2.CarboardListComponent /*, canDeactivate: [DeAuthGuard]*/ },
    { path: 'login', canActivate: [index_1.AuthGuard], component: index_2.LoginComponent },
    { path: 'register', component: index_2.RegisterListComponent, canActivate: [index_1.AuthGuard] }
];
//# sourceMappingURL=home.router.js.map