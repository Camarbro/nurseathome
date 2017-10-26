import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ContactPage } from '../pages/contact/contact';
import { ServiciosPage } from '../pages/servicios/servicios';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array<{title: string,icon:string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Inicio',icon:'home', component: DashboardPage },
      { title: 'Servicios',icon:'medkit', component: ServiciosPage },
      { title: 'Nosotros', icon:'contact', component: AboutPage },
      //{ title: 'Opinion', icon:'', component:},
      { title: 'Contacto', icon:'contacts', component: ContactPage },
      { title: 'Cerrar Sesion',icon:'lock', component: LoginPage },
    ];
  }
  initializeApp() {
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}

openPage(page) {
  // close the menu when clicking a link from the menu
  this.menu.close();
  // navigate to the new page if it is not the current page
  this.nav.setRoot(page.component);
}
}
