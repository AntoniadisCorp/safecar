import { Component } from '@angular/core'
import { AuthenticationService, TaskService, 
  AlertService, UserService, EventsService } from './services/index'
// import { AuthGuard, DeAuthGuard } from './_guards/index'

@Component({

  selector    : 'my-app',
  templateUrl : `../views/main_partials/app.ejs`,
  providers   : [ 
      // AuthenticationService,
      AlertService, 
      UserService, 
      TaskService,
      EventsService
  ]
})

export class AppComponent { }