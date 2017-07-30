// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'
import { NgModule }             from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Location, 
  LocationStrategy, 
  PathLocationStrategy, 
  HashLocationStrategy } from '@angular/common'

import { HomeRoutes }            from './routes/index'
import { PageNotFoundComponent, HomeListComponent } from './components/index'
import { AuthGuard, DeAuthGuard, CanLoadGuard }             from './_guards/index'
import { AuthenticationService } from './services/index'
// import { FeatureRoutes }  from './routes/feature.router';

// Route Configuration
export const appRoutes: Routes = [
  // Add routes form a different file
  ...HomeRoutes,
  //...FeatureRoutes,
  {
    path: '',
    component: HomeListComponent,
    // redirectTo: '/', 
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    DeAuthGuard,
    CanLoadGuard,
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
