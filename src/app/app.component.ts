import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {TimersPage} from './pages/timers/timers.page';
import {TimersConfigPage} from './pages/timers-config/timers-config.page';
import {TimerConfigPage} from './pages/timer-config/timer-config.page';


@Component({
  templateUrl: 'build/app.html',
    providers: []
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TimersPage; 
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    let a: any
    let b: any
    if ( a == b )

    // set our app's pages
    this.pages = [
        { title: 'Timers', component: TimersPage },
        { title: 'Timers configuration', component: TimersConfigPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      console.log('initilizeApp - platform ... ready!');
    });
    console.log('initilizeApp ... done!');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}