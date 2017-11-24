import { Component, Input , OnInit} from '@angular/core';
import { User } from '../../pages/user/user.modal';
import { Post } from '../post/post.modal';
import { UserService } from '../../pages/user/user.service';

/**
 * Generated class for the UserPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-page',
  templateUrl: 'user-page.html'
})

export class UserPageComponent implements OnInit{

  @Input() user: User
  @Input() posts: Post[]

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.postsByUser(this.user.id)
    .subscribe(posts => this.posts = posts)
  }


}
