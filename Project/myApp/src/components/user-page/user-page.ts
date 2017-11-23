import { Component, Input } from '@angular/core';
import { User } from '../../pages/user/user.modal';

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

export class UserPageComponent {

  @Input() user: User

  constructor() {
  }

}
