import { Component, OnInit , Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../components/post/post.modal';
import { UserService } from '../user/user.service';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage implements OnInit{

  @Input() posts: Post[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private userService: UserService) {       
    
  }

  ngOnInit(){
    this.userService.posts()
    .subscribe(posts => this.posts = posts)
  }
}
