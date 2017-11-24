import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedPageModule } from '../pages/feed/feed.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { UserPageModule } from '../pages/user/user.module';
import { UserService } from '../pages/user/user.service';
import { HttpModule } from '@angular/http';
import { PostComponent } from '../components/post/post';
import { UserPageComponent } from '../components/user-page/user-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PostComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    UserPageModule,
    ContactPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PostComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
