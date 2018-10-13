import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  lol: string;

  constructor(public navCtrl: NavController, public http: Http) {

    this.lol = "dsgsg";

    let url = "https://thawing-hamlet-66544.herokuapp.com/api/hello";

    this.http.get(url).map(res => res.json()).subscribe(data => {

      console.log(data);

    });

  }

}
