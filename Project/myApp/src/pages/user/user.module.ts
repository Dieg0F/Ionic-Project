import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { UserPageComponent } from '../../components/user-page/user-page';

@NgModule({
  declarations: [
    UserPage,
    UserPageComponent
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserPageModule {}
