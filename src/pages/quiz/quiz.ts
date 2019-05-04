import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizMetadata } from '../../model/quizMetadata';
import { QuizProvider} from '../../providers/quizProvider';
import { GlobalProvider} from '../../providers/globalProvider';
import { SubjectFilterPipe } from '../../pages/filterSubject';


@Component({
  selector: 'quiz-test',
  templateUrl: 'quiz.html',
  providers: [QuizProvider]

})
export class QuizPage {
 
   quizMetadata: QuizMetadata = new QuizMetadata();
   name: string;
   subjectValue: string[] = new Array<string>(); 
   radioSelected: boolean;
   

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public quizProvider: QuizProvider,
              public globalProvider: GlobalProvider) {
  
    this.name = "Udhay";
    this.subjectValue.push("Physics");

    // If we navigated to this page, we will have an item available as a nav param
 
  }

  ngOnInit() {

/*      this.quizProvider.getQuestions1().
      subscribe(res => { this.name = <string> res, console.log("success of the call")
  }, err =>{console.log("Error Retireval in the error")
  }); */
    this.fetchQuestions();


  }
  fetchQuestions() {


    this.quizProvider.getQuestions(this.globalProvider.getSubject().isBiology,this.globalProvider.getSubject().isPhysics,this.globalProvider.getSubject().isChemistry)
        .subscribe(res => {this.quizMetadata = <QuizMetadata> res, console.log("success of the call" + this.quizMetadata.questions[0].question_expl)

        }, err => {
           console.log("Error Retireval in the error" + err.value)
      });

 
  }
  
  submit() {

          console.log("the value of submit");
          let correctAnswercount: number = 0;

          this.quizMetadata.questions.forEach(function(qn) {
            
              qn.answers.forEach(an => {
                   if((an.answer == qn.checked) && (an.is_right_answer))
                   correctAnswercount = correctAnswercount + 1;
              });


          });

          console.log("Number of correct answers " + correctAnswercount);

   }

}
  


