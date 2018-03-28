import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the VerificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VerificationProvider {

  constructor(
    public db: AngularFirestore
  ) {
  }

  searchLicense(licenceNumber: string): Observable<any> {
    return this.db.collection('licenses').doc(licenceNumber).snapshotChanges()
    .map((action) => {
      console.log(action);
      const data = action.payload.data();
      const id = action.payload.id;
      return { id, ...data };
    });
  }
}
