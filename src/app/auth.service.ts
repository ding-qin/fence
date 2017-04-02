import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

    public currentUser : any;
    public redirectUrl = null;

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(authState => {
            if (authState) {
                console.log(authState);
                this.currentUser = authState.auth;
            } else {
                console.log("User is null");
                this.currentUser = null;
            }
        });
    }

    getUserDisplayName() {
        return this.currentUser.displayName;
    }

    get isAuthenticated(): boolean {
        return this.currentUser != null;
    }

    logout() {
        return this.af.auth.logout();
    }

    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    login(email, password) {
       return this.af.auth.login({
            "email": email,
            "password": password
        });
    }
}