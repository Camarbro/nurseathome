import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ContactPage } from '../pages/contact/contact';
import { ServiciosPage } from '../pages/servicios/servicios';
import { NursesPage } from '../pages/nurses/nurses';
import { NursesDetailPage } from '../pages/nurses-detail/nurses-detail';
import { MisServiciosPage } from '../pages/mis-servicios/mis-servicios';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    DashboardPage,
    ContactPage,
    ServiciosPage,
    NursesPage,
    NursesDetailPage,
    MisServiciosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    DashboardPage,
    ContactPage,
    ServiciosPage,
    NursesPage,
    NursesDetailPage,
    MisServiciosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
