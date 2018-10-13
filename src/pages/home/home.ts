import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  lol: string;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {

    this.lol = "dsgsg";

    let url = "https://hack-back.herokuapp.com/api/hello";

    this.http.get(url).map(res => res.json()).subscribe(data => {

      console.log(data);

    });

  }

  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      title: 'My Home',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();
  }

}
