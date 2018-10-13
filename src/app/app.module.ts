import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventPage } from '../pages/event/event';
import { EventsFeedPage } from '../pages/events-feed/events-feed';
import { ForumPage } from '../pages/forum/forum';
import { ForumsFeedPage } from '../pages/forums-feed/forums-feed';
import { ProfilePage } from '../pages/profile/profile';

import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ProfileProvider } from '../providers/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    EventsFeedPage,
    ForumPage,
    ForumsFeedPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventPage,
    EventsFeedPage,
    ForumPage,
    ForumsFeedPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProfileProvider
  ]
})
export class AppModule { }
