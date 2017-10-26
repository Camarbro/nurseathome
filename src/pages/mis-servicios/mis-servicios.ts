import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NursesDetailPage } from '../nurses-detail/nurses-detail';

@IonicPage()
@Component({
  selector: 'page-mis-servicios',
  templateUrl: 'mis-servicios.html',
})
export class MisServiciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nursesDetailPage(){ this.navCtrl.push(NursesDetailPage); }


}
