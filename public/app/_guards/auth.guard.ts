import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthenticationService } from '../services/index'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService: AuthenticationService, private router: Router) {}
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        let url: string = state.url

        return this.checkLogin(url)
    }

    checkLogin(url: string) : boolean {

        // get Sign In status from localStorage Web Cookie
        let localst = JSON.parse(localStorage.getItem('currentUser'))
        , loggedin = localst !== null && localst._id !== {}? true : false

        let passport = !loggedin
        if (!passport) this.router.navigate([url])
        return true
    }
}