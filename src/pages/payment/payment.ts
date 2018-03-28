import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment';
import { FinishPage } from '../finish/finish';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private paymentProvider: PaymentProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  createLicense() {
    const license = JSON.parse(localStorage.getItem('formData'));
    this.paymentProvider.createLicense(license).subscribe((data) => (
      localStorage.removeItem('formData'),
      this.navCtrl.push(FinishPage, { status: 'passed', license: data.id })
    ));
  }

}
