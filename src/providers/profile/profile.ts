import { Injectable } from '@angular/core';
import { Profile } from '../../classes/Profile';
import { Http } from '@angular/http';


@Injectable()
export class ProfileProvider {

  constructor(public http: Http) {
    console.log('Hello ProfileProvider Provider');
  }

  public loadProfileData() : any{

    let url = "https://hack-back.herokuapp.com/api/hello";
    let prof: Profile;

    this.http.get(url).map(res => res.json()).subscribe(data => {
      console.debug(data);
      return data
    });
  }

  public makeProfilefromData(data: any): Profile{
    let prof = new Profile(JSON.parse(data));

    return prof;
  }

}
