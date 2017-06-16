import { Routes } from '@angular/router'
import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'

import { HomeListComponent, 
    RegisterListComponent, 
    CarboardListComponent, 
    LoginComponent }             from '../components/index'

// Route Configuration
export const HomeRoutes: Routes = [

    { path: 'home', component: HomeListComponent },
    { path: 'carboard/:id', component: CarboardListComponent, canDeactivate: [DeAuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterListComponent/*, canLoad: [CanLoadGuard]*/ }

]