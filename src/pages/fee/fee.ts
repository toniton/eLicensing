import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeeProvider } from '../../providers/fee/fee';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fee',
  templateUrl: 'fee.html',
})
export class FeePage {
  public fees: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private feeProvider: FeeProvider
  ) {
  }

  ionViewDidLoad() {
    this.fees = this.feeProvider.getAllFees();
  }

  getRandomColor() {
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
    return '#f7f7f7';
  }
  
}
