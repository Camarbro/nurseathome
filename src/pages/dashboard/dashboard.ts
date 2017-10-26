import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MisServiciosPage } from '../mis-servicios/mis-servicios';
import { ContactPage } from '../contact/contact';
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  misServiciosPage(){ this.navCtrl.push(MisServiciosPage); }
  contactPage(){ this.navCtrl.push(ContactPage); }


}
