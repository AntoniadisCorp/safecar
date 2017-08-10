import { Routes } from '@angular/router'
import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'

import { RegisterListComponent, 
    CarboardListComponent, 
    LoginComponent }             from '../components/index'

// Route Configuration
export const HomeRoutes: Routes = [

    { path: 'carboard/:id', component: CarboardListComponent/*, canDeactivate: [DeAuthGuard]*/ },
    { path: 'login'/* , canActivate: [AuthGuard] */, component: LoginComponent},
    { path: 'register', component: RegisterListComponent/* , canActivate: [AuthGuard] */ }

]