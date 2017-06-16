import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs/Rx'

import 'rxjs/add/operator/map'

@Injectable()
export class EventsService {

    listeners = {}
    eventsSubject = new Subject()
    events = Observable.from(this.eventsSubject)

    constructor() {


        this.events.subscribe(
            ({name, args}) => {
                if (this.listeners[name]) {
                    for (let listener of this.listeners[name]) {
                        listener(...args);
                    }
                }
            });
    }

    on(name, listener) {
        
        if (!this.listeners[name]) {
            this.listeners[name] = []
        }

        this.listeners[name].push(listener);
    }

    broadcast(name, ...args) {
        this.eventsSubject.next({
            name,
            args
        });
    }
}