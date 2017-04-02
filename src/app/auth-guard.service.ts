import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad,
    Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;
        console.log("canActivate checking " + url);
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> {
        let url = '/' + route.path;
        console.log("canLoad checking " + url);
        return this.checkLogin(url);
    }

    private checkLogin(url: string): Observable<boolean> {
        return this.authService.af.auth
            .take(1)
            .map(authState => !!authState)
            .do(isUserLoggedIn => {
                if (isUserLoggedIn) {
                    return true;
                } else {
                    console.log("user is not logged in")
                    // Store the attempted URL for redirecting
                    this.authService.redirectUrl = url;

                    // Create a dummy session id
                    let sessionId = 123456789;

                    // Set our navigation extras object
                    // that contains our global query params and fragment
                    let navigationExtras: NavigationExtras = {
                        queryParams: { 'session_id': sessionId },
                        fragment: 'anchor'
                    };
                    console.log("Redirect to login page");
                    // Navigate to the login page with extras
                    this.router.navigate(['/login'],
                        { queryParams: { 'returnUrl': url } });
                    return false;
                }
            });
    }
}