import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NursesDetailPage } from '../nurses-detail/nurses-detail';

@IonicPage()
@Component({
  selector: 'page-nurses',
  templateUrl: 'nurses.html',
})
export class NursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nursesDetailPage(){ this.navCtrl.push(NursesDetailPage); }

}
