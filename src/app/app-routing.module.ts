import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/+login/login.module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard]
    },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
      PageNotFoundComponent
  ],
  providers: [
      AuthGuard
  ]
})

export class AppRoutingModule { }