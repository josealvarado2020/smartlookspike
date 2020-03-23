import { Component } from "@angular/core";
import {
  Smartlook,
  SmartlookSetupConfig,
  SmartlookUserIdentifier
} from "@ionic-native/smartlook/ngx";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private smartlook: Smartlook
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.smartlook.setupAndStartRecording(
        new SmartlookSetupConfig("87d90cf49a9b6ed7e65f12a06af7b3cef2204867")
      );
      this.smartlook.setUserIdentifier(
        new SmartlookUserIdentifier("88888888", {
          name: "88888888",
          email: "88888888"
        })
      );
      this.splashScreen.hide();
    });
  }
}
