import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NursesDetailPage } from './nurses-detail';

@NgModule({
  declarations: [
    NursesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NursesDetailPage),
  ],
})
export class NursesDetailPageModule {}
