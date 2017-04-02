# Fence - A web login module ready to be integrated

## Technologies used

- Angular 4.x
- Angular Material
- Firebase (via [AngularFire2](https://github.com/angular/angularfire2))

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0, and following the best practices described in [Angular Style Guide](https://angular.io/styleguide).

## How to run in local

`git clone https://github.com/ding-qin/fence.git`

`cd fence`

`npm install`

Then sign up [Firebase](https://console.firebase.google.com/)

Go to Firebase console, add a new project.

Go to this new project, select "Authentication" from left navigation menu, and click "SIGN-IN METHOD"

Enable "Email/Password"

Click "WEB SETUP" on the right top corner of "Authentication" page, and copy the config information to app.module.ts in this Fence project.

Then go to "USERS" tab to add a new user.

Finally,
`ng serve` 

Navigate to `http://localhost:4200/`. 

