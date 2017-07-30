import { NgModule }         from '@angular/core'
import { BrowserModule }    from '@angular/platform-browser'
import { HttpModule }       from '@angular/http'
import { FormsModule }      from '@angular/forms'
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap'
import  'hammerjs'



// Routing Module
import { RoutingModule }    from './app.routes'

// Material Module and fonts
import { Angular2FontawesomeModule }  from 'angular2-fontawesome/angular2-fontawesome'
import { MaterialModule }             from '@angular/material'
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations'
import { FlexLayoutModule }           from "@angular/flex-layout"
import { CommonModule }               from '@angular/common'
import { MdTabsModule, MdCardModule } from '@angular/material'
// Auth Guard
// import { AuthGuard, DeAuthGuard, CanLoadGuard } from './_guards/index'
// import { AuthenticationService } from './services/index'

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
        AlertComponent,
        MapComponent }    from './components/index'


import { WindowRef }        from './services/index'

@NgModule({

  imports: [

      BrowserModule, 
      HttpModule, 
      FormsModule, 
      NgbModule.forRoot(),
      RoutingModule,
      Angular2FontawesomeModule,
      MaterialModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      CommonModule,
      MdTabsModule,
      MdCardModule
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
      AlertComponent,
      MapComponent
    ],

  providers: [
    //PetService
    WindowRef
  ],

  bootstrap:    [

    AppComponent 
    ]
})

export class AppModule { }