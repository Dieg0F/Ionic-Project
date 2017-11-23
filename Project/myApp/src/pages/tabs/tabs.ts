import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserPage;
  tab3Root = ContactPage;
  tab4Root = FeedPage;

  constructor() {

  }
}
