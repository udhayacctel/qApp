import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { QuizPage } from '../pages/quiz/quiz';
import { LoginPage } from '../pages/login/login';
import { ResultPage } from '../pages/result/result';
import { SubjectFilterPipe } from '../pages/filterSubject';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GlobalProvider} from '../providers/globalProvider'
import {QuizProvider} from '../providers/quizProvider'
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QuizPage,
    LoginPage,
    ResultPage, 
    SubjectFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],


  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QuizPage,
    LoginPage,
    ResultPage
  ],
  providers: [
    QuizProvider,
    GlobalProvider,
    StatusBar,
    SplashScreen,
    {provide:ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
