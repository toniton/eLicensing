import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { VerificationProvider } from '../../providers/verification/verification';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {
  private loader;
  public form: FormGroup;
  public displayForm: boolean = false;
  public displayError: string;
  public license: any;
  public subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private verificationProvider: VerificationProvider
  ) {
    this.form = this.formBuilder.group({
      'license': ['', Validators.required]
    });
  }

  ionDidLoad() {
    this.displayForm = true;
  }

  presentLoading() {
    return this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  validateLicense(credentials) {
    this.loader = this.presentLoading();
    this.loader.present();
    this.subscription = this.verificationProvider.searchLicense(credentials.license)
      .subscribe((data) => (
        this.license = data,
        this.loader.dismiss()
      ),
        (error) => (this.loader.dismiss(), this.displayError = error.message)
      );
  }

  ionWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
