import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {
  public status;
  public license;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.license = this.navParams.get('license');
    this.status = this.navParams.get('status');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage)
  }

}
