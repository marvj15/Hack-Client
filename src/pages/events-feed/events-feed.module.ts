import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsFeedPage } from './events-feed';

@NgModule({
  declarations: [
    EventsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsFeedPage),
  ],
})
export class EventsFeedPageModule {}
