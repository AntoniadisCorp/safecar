"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../components/index");
// Route Configuration
exports.HomeRoutes = [
    { path: 'carboard/:id', component: index_1.CarboardListComponent /*, canDeactivate: [DeAuthGuard]*/ },
    { path: 'login' /* , canActivate: [AuthGuard] */, component: index_1.LoginComponent },
    { path: 'register', component: index_1.RegisterListComponent /* , canActivate: [AuthGuard] */ }
];
//# sourceMappingURL=home.router.js.map