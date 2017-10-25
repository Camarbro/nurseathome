import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NursesPage } from '../nurses/nurses';

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nursesPage(){ this.navCtrl.push(NursesPage); }


}
