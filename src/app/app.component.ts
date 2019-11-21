import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform
  ) {}

  ngOnInit() {
    SplashScreen.hide().catch(err => {
      console.warn(err);
    });

    StatusBar.hide().catch(err => {
      console.warn(err);
    });

    if (this.platform.is('hybrid')) {
      console.log('hybrid');
    }
  }
}
