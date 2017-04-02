import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {};
  private ui:any;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  getUserDisplayName() {
    return this.authService.getUserDisplayName();
  }

  logout() {
    this.authService.logout().then((data) => {
      console.log('User succesfully signed out.');
      this.router.navigate(['/login']);
    });
  }
}
