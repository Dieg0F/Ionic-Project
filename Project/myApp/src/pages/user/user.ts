import { Component , Input, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './user.modal';
import { UserService } from './user.service';
import { Post } from '../../components/post/post.modal';

import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/filter';
import  'rxjs/add/operator/catch';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{

  @Input() user: User

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserById(100)
    .subscribe(user => this.user = user)
  }
  
}
