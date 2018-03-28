import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { ComponentsModule } from '../components/components.module';
import { QuestionPage } from '../pages/question/question';
import { LicensePage } from '../pages/license/license';
import { CategoryProvider } from '../providers/category/category';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { FinishPage } from '../pages/finish/finish';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';
import { FeePage } from '../pages/fee/fee';
import { FeeProvider } from '../providers/fee/fee';
import { VerificationPage } from '../pages/verification/verification';
import { VerificationProvider } from '../providers/verification/verification';
import { FormPage } from '../pages/form/form';
import { FormProvider } from '../providers/form/form';
import { QuestionProvider } from '../providers/question/question';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentProvider } from '../providers/payment/payment';

export const config = {
  apiKey: "AIzaSyD7FBIiyQaRDo0ra0svXvc0pU_ntVuNN30",
  authDomain: "elicensing-3f150.firebaseapp.com",
  databaseURL: "https://elicensing-3f150.firebaseio.com",
  projectId: "elicensing-3f150",
  storageBucket: "elicensing-3f150.appspot.com",
  messagingSenderId: "356019830506"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    QuestionPage,
    LicensePage,
    FormPage,
    FeePage,
    VerificationPage,
    PaymentPage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    QuestionPage,
    FeePage,
    FormPage,
    LicensePage,
    VerificationPage,
    PaymentPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticateProvider,
    FeeProvider,
    VerificationProvider,
    FormProvider,
    QuestionProvider,
    PaymentProvider
  ]
})
export class AppModule { }
