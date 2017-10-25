import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dashboardPage(){ this.navCtrl.push(DashboardPage); }
  signupPage(){ this.navCtrl.push(SignupPage); }
  forgotPasswordPage(){ this.navCtrl.push(ForgotpasswordPage); }
  

}
