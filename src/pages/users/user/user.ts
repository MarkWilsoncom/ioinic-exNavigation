import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { NavController } from "ionic-angular/navigation/nav-controller";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor(private navParams: NavParams,
              private navCtrl: NavController) {
    // Or here
    // this.name = this.navParams.get('userName');
  }

  ngOnInit() {
    this.name = this.navParams.get('userName');
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  onGoHome() {
    this.navCtrl.popToRoot();
  }
}
