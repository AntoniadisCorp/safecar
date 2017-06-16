import { NgModule }         from '@angular/core'
import { BrowserModule }    from '@angular/platform-browser'
import { HttpModule }       from '@angular/http'
import { FormsModule }      from '@angular/forms'
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap'
import 'hammerjs'

// Routing Module
import { RoutingModule }    from './app.routes'

// Material Module and fonts
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MaterialModule }            from '@angular/material'

// Auth Guard
import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
import { AuthenticationService } from './services/index'

// Components
import { AppComponent }     from './app.component'
import { TaskComponent, 
        SocketComponent,
        MenuComponent,
        FooterComponent, 
        HomeListComponent, 
        PageNotFoundComponent, 
        LoginComponent,
        RegisterListComponent,
        CarboardListComponent, 
        AlertComponent }    from './components/index'

// import { PetService }       from './pet.service'
import { WindowRef }        from './services/index'

@NgModule({

  imports: [

    BrowserModule, 
    HttpModule, 
    FormsModule, 
    NgbModule.forRoot(),
    RoutingModule,
    Angular2FontawesomeModule,
    MaterialModule
    ],

  declarations: [

    AppComponent, 
    TaskComponent, 
    SocketComponent, 
    MenuComponent, 
    FooterComponent,
    HomeListComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterListComponent,
    CarboardListComponent,
    AlertComponent
    ],

  providers: [
    //PetService
    AuthGuard,
    DeAuthGuard,
    AuthenticationService,
    WindowRef
  ],

  bootstrap:    [

    AppComponent 
    ]
})

export class AppModule { }