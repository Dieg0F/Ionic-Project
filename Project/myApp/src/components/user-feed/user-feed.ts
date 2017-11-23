import { Component } from '@angular/core';

/**
 * Generated class for the UserFeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-feed',
  templateUrl: 'user-feed.html'
})
export class UserFeedComponent {

  text: string;

  constructor() {
    console.log('Hello UserFeedComponent Component');
    this.text = 'Hello World';
  }

}
