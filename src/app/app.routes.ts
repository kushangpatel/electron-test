import { HomeComponent } from './compoments/home/home.component'
import { Routes } from '@angular/router'
import { ViewThreeComponent } from './compoments/view-three/view-three.component'
import { ViewTwoComponent } from './compoments/view-two/view-two.component'

export const ROUTE_HOME = '/home'
export const ROUTE_VIEW_TWO = '/viewtwo'
export const ROUTE_VIEW_THREE = '/viewthree'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Sign In / Sign Up
  { path: 'home', component: HomeComponent },
  { path: 'viewtwo', component: ViewTwoComponent },
  { path: 'viewthree', component: ViewThreeComponent },
  // For unknown routes, redirect to home page
  { path: '**', redirectTo: 'home' },
]