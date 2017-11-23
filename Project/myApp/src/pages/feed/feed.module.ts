import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { PostComponent } from '../../components/post/post';
import { UserService } from '../user/user.service';

@NgModule({
  declarations: [
    FeedPage,
    PostComponent
  ],
  imports: [
    IonicPageModule.forChild(FeedPage)        
  ],
})
export class FeedPageModule {}
