// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router'
import { NgModule }             from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Location, 
  LocationStrategy, 
  PathLocationStrategy, 
  HashLocationStrategy } from '@angular/common'

import { HomeRoutes }            from './routes/index'
import { PageNotFoundComponent } from './components/index'
import { AuthGuard }             from './_guards/index'
// import { FeatureRoutes }  from './routes/feature.router';

// Route Configuration
export const appRoutes: Routes = [
  // Add routes form a different file
  ...HomeRoutes,
  //...FeatureRoutes,
  {
    path: '',

    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {}
