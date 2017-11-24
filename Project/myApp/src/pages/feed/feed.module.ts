import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { PostComponent } from '../../components/post/post';

@NgModule({
  declarations: [
    FeedPage
  ],
  imports: [
    IonicPageModule.forChild(FeedPage)        
  ],
})
export class FeedPageModule {}
