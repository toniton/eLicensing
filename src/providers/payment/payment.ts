import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {

  constructor(
    public db: AngularFirestore
  ) {
  }

  createLicense(license: any): Observable<any> {
    return Observable.fromPromise(this.db.collection('licenses').add(license))
    .map((action) => {
      const id = action.id;
      return { id };
    });;
  }
}
