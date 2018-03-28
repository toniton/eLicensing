import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
// import { CategoryProvider } from '../../providers/category/category';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FeePage } from '../fee/fee';
import { VerificationPage } from '../verification/verification';
import { FormPage } from '../form/form';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public categories: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
  ) {
  }
  
  gotoVerification() {
    this.navCtrl.push(VerificationPage);
  }

  gotoForm() {
    this.navCtrl.push(FormPage);
  }
  
  gotoFee() {
    this.navCtrl.push(FeePage);
  }
}
