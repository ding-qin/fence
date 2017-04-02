import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginInfo } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginInfo = new LoginInfo("", "");
  public isLoggingInProgress = false;
  public errorMessage = null;

  mdProgressCircleColor = "primary";
  mdProgressCircleMode = "indeterminate";
  mdProgressCircleValue = 50;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.isLoggingInProgress = true;
    this.errorMessage = null;

    this.authService.login(this.loginInfo.email, this.loginInfo.password)
      .then((data) => {
        this.isLoggingInProgress = false;
        console.log("User logged in successfully!");
        let redirectUrl = this.authService.redirectUrl;
        if (redirectUrl == null) {
          console.log("redirectUrl is null");
          redirectUrl = "/dashboard";
        }
        this.router.navigate([redirectUrl]);
      })
      .catch((error) => {
        this.isLoggingInProgress = false;
        console.log(error);
        this.errorMessage = error.message;
      });
  }
}
