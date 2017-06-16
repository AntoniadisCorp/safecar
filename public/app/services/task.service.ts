import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/**
 *  Documentation
 * 
 * @param {class} TaskService
 */

@Injectable()
export class TaskService {

    constructor(private http:Http) {

        console.log('Task Service Inititialized...')
        this.getTasks()
    }

     /* ----  getTasks ---- */
    getTasks() {
        return this.http.get('/api/tasks')
            .map(res => res.json())
    }

    /* ----  addTask ---- */
    addTask(newTask) {

        console.log( newTask, ` ${newTask}` )
        var headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post('/api/task', JSON.stringify(newTask), 
            new RequestOptions ({headers: headers, method: "post", withCredentials: true}))
            .map(res => res.json())
    }

    /* ----  deleteTask ---- */
    deleteTask(id) {
        
        return this.http.delete('/api/task/'+id)
            .map(res => res.json())
    }

    /**
     * Documentation
     * @param {boolean} task  Enable or Disable checkbox Status
     * 
     */
    updateStatus(task) {

        console.log(task)
        var headers = new Headers()
        headers.append('Content-Type', 'application/json')
        
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), 
            new RequestOptions ({headers: headers})) // , method: "put", withCredentials: true
            .map(res => res.json())
    }
}