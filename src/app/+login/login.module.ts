import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }
