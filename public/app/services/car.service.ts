import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/**
 *  Documentation
 * 
 * @param {class} CarService
 */

@Injectable()
export class CarService {

    constructor(private http: Http) {

        console.log('Car Service Inititialized...')
     }
    
    Initialization (id) {

        // fetch initialization
        return this.http.get('/api/init/'+id)
            .map(res => res.json())

    }


}