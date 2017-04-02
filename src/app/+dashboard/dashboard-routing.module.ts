import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../auth-guard.service';

const dashboardRoutes: Routes = [
  { path: '',  
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
      AuthGuard
  ]
})
export class DashboardRoutingModule { }