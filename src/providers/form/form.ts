import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FormProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormProvider {

  constructor(
    public db: AngularFirestore
  ) {
  }

  getAllStates(): Observable<any> {
    return this.db.collection('states').snapshotChanges()
    .map((actions) => {
      return actions.map((action: any) => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data };
      })
    });
  }

}
