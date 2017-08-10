import { Component } from '@angular/core'
import { AuthenticationService, TaskService, 
  AlertService, UserService, EventsService, 
  CarService } from './services/index'
// import { AuthGuard, DeAuthGuard } from './_guards/index'

@Component({

  selector    : 'my-app',
  templateUrl : `../views/main_partials/app.ejs`,
  // styleUrls: ['../styles/app.scss'],
  providers   : [ 
      // AuthenticationService,
      AlertService, 
      UserService, 
      TaskService,
      EventsService,
      CarService
  ]
})

export class AppComponent { }