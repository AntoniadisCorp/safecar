import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/index'

import { LoginComponent } from '../components/index';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class DeAuthGuard implements CanDeactivate<LoginComponent> {

    constructor(private authService: AuthenticationService, private router: Router)
    {}

    canDeactivate(
        component: LoginComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        let url: string = state.url

        return this.checkLogin(url)
    }

    private checkLogin(url: string): boolean {

        let localst = JSON.parse(localStorage.getItem('currentUser'))
        , loggedin = localst !== null && localst._id !== {}? true : false

        console.log(loggedin, localStorage.getItem('currentUser'))
        if (loggedin) this.router.navigate(['/'])
        return false
        // this.authService.getLoggedIn()
        //     .map( res => this.authService.isLoggedIn = res)
        //     .take(1)
        //     .do(allowed => {
        //         console.log('deaut allowed:',  allowed)
        //         if (allowed) this.router.navigate(['/'])
        //         return allowed
        //     })
    }
}