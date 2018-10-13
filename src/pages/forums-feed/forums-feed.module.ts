import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumsFeedPage } from './forums-feed';

@NgModule({
  declarations: [
    ForumsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumsFeedPage),
  ],
})
export class ForumsFeedPageModule {}
