import { Component , Input} from '@angular/core';
import { Post } from './post.modal';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  @Input() post: Post

  constructor() {    
    
  }

}
