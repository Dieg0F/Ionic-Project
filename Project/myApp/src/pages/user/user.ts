import { Component , Input, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './user.modal';
import { UserService } from './user.service';
import { Post } from '../../components/post/post.modal';

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
  @Input() posts: Post[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserById(49)
    .subscribe(user => this.user = user)
  }

}
