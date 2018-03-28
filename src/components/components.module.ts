import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';
import { SignupComponent } from './signup/signup';
@NgModule({
	declarations: [LoginComponent,
    SignupComponent],
	imports: [
		IonicModule
	],
	exports: [LoginComponent,
    SignupComponent]
})
export class ComponentsModule {}
