import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

import { QuizPage } from './quiz.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SubjectFilterPipe } from '../../filterSubject';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuizPage
      },
      
    ])
  ],
  providers: [
    GooglePlus,
  ],
  declarations: [QuizPage, SubjectFilterPipe]
})
export class QuizPageModule {}
