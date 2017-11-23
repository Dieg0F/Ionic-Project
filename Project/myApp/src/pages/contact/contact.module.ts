import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { UserContactComponent } from '../../components/user-contact/user-contact';

@NgModule({
  declarations: [
    ContactPage,
    UserContactComponent
  ],
  imports: [
    IonicPageModule.forChild(ContactPage)        
  ],
})
export class ContactPageModule {}
