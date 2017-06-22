import { HomePage } from '../pages';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private splashscreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.openHome();
    });
  }

  openHome() {
    this.nav.setRoot(HomePage).then(() => {
      this.splashscreen.hide();
    });
  }
}
