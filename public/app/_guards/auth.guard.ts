import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthenticationService } from '../services/index'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService: AuthenticationService, private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        let url: string = state.url

        return this.checkLogin(url)
    }

    private checkLogin(url: string): Observable<boolean> {

        return this.authService.getLoggedIn()
            .map( res => this.authService.isLoggedIn = res)
            .take(1)
            .do(allowed => {
                console.log('allowed: ' + url + ' ',  allowed)
                if (allowed === false) this.router.navigate(['/login'])
                // else this.router.navigate([url])
            })
    }

    // if (res) {
    //             // this.router.navigate(['/'])
    //             // return Observable.of(!res).delay(1000).do(val => console.log(val));
    //         } 
    //         // Store the attempted URL for redirecting
    //         // this.authService.redirectUrl = url
    //         // this.router.navigate(['/login'])//, { queryParams: { returnUrl: state.url }}
    //          // Navigate to the login page with extras
    //         // return Observable.of(false).delay(1000).do(val => console.log(val));
}