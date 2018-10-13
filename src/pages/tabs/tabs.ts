import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { ForumsFeedPage } from '../forums-feed/forums-feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ForumsFeedPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
