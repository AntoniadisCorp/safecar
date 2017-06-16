import { Component } from '@angular/core'
import { TaskService } from '../services/task.service'
import { Task } from '../classes/task'
import { AlertService, AuthenticationService } from '../services/index'


@Component({

  selector    : 'tasks',
  templateUrl : `../../views/ng_partials/tasks.ejs`
})

export class TaskComponent {
  
  tasks: Task[]
  title: string

  constructor(private taskService:TaskService,
              private Alert: AlertService) {

    this.taskService.getTasks()
        .subscribe(tasks => {
            this.tasks = tasks
        })
  }

  addTask(event) {

    event.preventDefault()
    
    var newTask = {
      title: this.title,
      isDone: false
    }

    this.taskService.addTask(newTask)
        .subscribe( tasks => {
            this.tasks.push(tasks)
            this.title = ''
        })
  }

  deleteTask(id) {

    var tasks = this.tasks

    this.taskService.deleteTask(id)
        .subscribe( data => {
          if (data.n == 1) {
            for (let i=0; i<tasks.length; i++){
              if (tasks[i]._id == id) {
                tasks.splice(i, data.n)
              }
            }
          }
        })
    
  }
  
  updateStatus(task) {

      var _task = {
          _id: task._id,
          title: task.title,
          isDone: !task.isDone
      }

      this.taskService.updateStatus(_task)
          .subscribe( data => {
            
            if (data.message !== undefined ) this.Alert.error(data.message)
            else if (data.error !== undefined ) this.Alert.error(data.error)
            else this.Alert.success(`Task ${task.title} updated..`)

            task.isDone = !task.isDone
          }, error => {
               this.Alert.error(error)
          })
  }
} 