import { Component, Inject, forwardRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthPage } from '../../pages/auth/auth';
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private loader;
  public form: FormGroup;
  public displayForm: boolean = false;
  public displayError: string;
  public subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public authProvider: AuthenticateProvider,
    @Inject(forwardRef(() => AuthPage)) private _parent: AuthPage,
    private formBuilder: FormBuilder,
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

  signIn(credentials) {
    this.loader = this.presentLoading();
    this.loader.present();
    this.subscription = this.authProvider.signInWithEmailAndPassword(credentials.email, credentials.password)
      .subscribe((data) => (
        this.loader.dismiss(),
        this.navCtrl.setRoot(HomePage),
        window.localStorage.setItem('currentUser', data.uid)
      ),
        (error) => (this.loader.dismiss(), this.displayError = error.message)
      );
  }

  showSignup() {
    this._parent.showSignup();
  }

  ionWillLeave() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
