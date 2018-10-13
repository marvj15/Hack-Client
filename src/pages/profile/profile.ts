import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../classes/Profile';
import { ProfileProvider } from '../../providers/profile/profile';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileInfo: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams,private profProvider: ProfileProvider) {
    //this.profileInfo = new Profile(1,"Marvj15","Jonathon","Marvin","jonmarvin2015@gmail.com","I like long walks to the fridge to eat my face off!","You would like to know","Apache helicopter","Raqet","Jonstown","Wherever");
    this.profileInfo = this.profProvider.makeProfilefromData(this.profProvider.loadProfileData());  //the Profile provider service

  }

  ionViewDidLoad() {

  }

}
