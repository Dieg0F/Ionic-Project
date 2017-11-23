import { Component, Input , OnInit} from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { UserService } from '../user/user.service';
import { User } from '../user/user.modal';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{
  
  @Input() users: User[]
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userService: UserService) {

  }

  ngOnInit() {
    this.userService.users()
    .subscribe(users => this.users = users)
  }


}
