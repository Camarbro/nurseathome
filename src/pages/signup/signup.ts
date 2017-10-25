import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dashboardPage(){ this.navCtrl.push(DashboardPage); }
  loginPage(){ this.navCtrl.push(LoginPage);}
  forgotPasswordPage(){ this.navCtrl.push(ForgotpasswordPage);}

}
