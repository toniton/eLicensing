import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticateProvider {

  constructor(
    public auth: AngularFireAuth
  ) {
    console.log('Hello AuthenticateProvider Provider');
  }

  signInWithEmailAndPassword(email: string, password: string): Observable<any> {
    return Observable.fromPromise(this.auth.auth.signInWithEmailAndPassword(email, password));
  }

  signUpWithEmailAndPassword(email: string, password: string): Observable<any> {
    return Observable.fromPromise(this.auth.auth.createUserWithEmailAndPassword(email, password));
  }

}
