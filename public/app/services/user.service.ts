import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
 
import { User } from '../classes/User'

/**
 *  Documentation
 * 
 * @param  {class} UserService In order To create new User
 */

@Injectable()
export class UserService {
    constructor(private http: Http) { 
        console.log('User Service Inititialized...')
        // initialize user
    }
 
    getAll() {
        return this.http.get('/auth/users', this.jwt()).map((res: Response) => res.json());
    }
 
    getById(id: string) {
        return this.http.get('/auth/users/' + id, this.jwt()).map((res: Response) => res.json());
    }
 
    create(user: User) {
        return this.http.post('/auth/signup', JSON.stringify({ user: user, username: user.mobile, password: user.password }) , this.jwt()).map((res: Response) => res.json());
    }
 
    update(user: User) {
        return this.http.put('/auth/users/' + user._id, user, this.jwt()).map((res: Response) => res.json());
    }
 
    delete(id: string) {
        return this.http.delete('/auth/users/' + id, this.jwt()).map((res: Response) => res.json());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        // console.log(currentUser)
        //if (currentUser && currentUser.token) {
        let headers = new Headers(); // { 'Authorization': 'Bearer ' + currentUser.token }
        headers.append('Content-Type','application/json')
        return new RequestOptions({ headers: headers })
       // }
    }
}