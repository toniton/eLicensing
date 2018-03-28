import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FormProvider } from '../../providers/form/form';
import { QuestionPage } from '../question/question';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  private loader;
  public form: FormGroup;
  public states: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private formProvider: FormProvider,
    private loadingCtrl: LoadingController
  ) {
    this.form = this.formBuilder.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'age': ['', Validators.required],
      'gender': ['', Validators.required],
      'street': ['', Validators.required],
      'city': ['', Validators.required],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'firstissue': ['', Validators.required],
      'facialmarks': ['', Validators.required]
    });
  }


  ionViewDidLoad() {
    this.states = this.formProvider.getAllStates();
  }

  presentLoading() {
    return this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  saveForm(credentials) {
    this.loader = this.presentLoading();
    this.loader.present();
    setTimeout(() => (
      this.loader.dismiss(),
      window.localStorage.setItem('formData', JSON.stringify(credentials)),
      this.navCtrl.setRoot(QuestionPage)
    ), 5000);
  }
}
