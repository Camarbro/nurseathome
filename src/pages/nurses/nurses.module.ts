import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NursesPage } from './nurses';

@NgModule({
  declarations: [
    NursesPage,
  ],
  imports: [
    IonicPageModule.forChild(NursesPage),
  ],
})
export class NursesPageModule {}
