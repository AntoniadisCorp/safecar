import { Injectable, OnDestroy } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService implements OnDestroy {
    
    isLoggedIn: boolean = false
    User = { _id: '' }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http) {
        console.log( 'AuthenticationService is Inititialized..')
        this.getLoggedIn()
        // this.sub = Observable.interval(10000).map(x => JSON.parse(localStorage.getItem('currentUser'))._id? true : false)
        //       .subscribe(x => { this.isLoggedIn = x, console.log(`isLoggedIn ${this.isLoggedIn}`) })
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // this.sub.unsubsribe()
    }

    getLoggedIn () {

        return this.http.get('/auth/loggedIn').map(response => {

                let res = response.json()
                , localst = JSON.parse(localStorage.getItem('currentUser'))

                , loggedin = localst !== null && localst._id !== {}? true : false

                this.isLoggedIn = false
                if (res && res.status && loggedin) this.isLoggedIn = res.status

                
                return this.isLoggedIn
            
            })
        
    }
 
    login(username: string, password: string) {

        let headers = new Headers(); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type','application/json')

        return this.http.post('/auth/login', JSON.stringify({ username: username, password: password }), 
            new RequestOptions ({ headers: headers })).map((response: Response) => {

                // login successful if there's a jwt token in the response
                this.User = response.json()
                console.log(`response on login: ${JSON.stringify(this.User)}`)

                if (this.User && this.User._id) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.User))
                    this.isLoggedIn = true
                    return this.User
                }

                this.isLoggedIn = false
                return this.User
            })
    }
 
    logout() {

        return this.http.get('/auth/logout').map(response => {

                let res = response.json(), loggedin = JSON.parse(localStorage.getItem('currentUser'))
                console.log(`Loging out.. ${localStorage.getItem('currentUser')}`)
                if (res && loggedin._id)
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser')

                return res
            })
    }
}