import { Component, Input } from '@angular/core';
import { User } from '../../pages/user/user.modal';

/**
 * Generated class for the UserContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-contact',
  templateUrl: 'user-contact.html'
})
export class UserContactComponent {

  @Input() user: User

  constructor() {    
  }

  

}
