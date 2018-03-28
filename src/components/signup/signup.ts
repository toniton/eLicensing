import { Component, Inject, forwardRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthPage } from '../../pages/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the SignupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupComponent {
  private loader;
  public form: FormGroup;
  public displayForm: boolean = false;
  public displayError: string;
  public subscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    @Inject(forwardRef(() => AuthPage)) private _parent:AuthPage,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public authProvider: AuthenticateProvider,
  ) {
    this.form = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
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

  signUp(credentials) {
    this.loader = this.presentLoading();
    this.loader.present();
    this.subscription = this.authProvider.signUpWithEmailAndPassword(credentials.email, credentials.password)
    .subscribe((data) => (
      this.loader.dismiss(),
      this.navCtrl.setRoot(HomePage),
      window.localStorage.setItem('currentUser', data.uid)
    ),
      (error) => (this.loader.dismiss(), this.displayError = error.message)
    );;
  }

  showLogin() {
    this._parent.showLogin();
  }

}
