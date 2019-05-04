import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subject } from '../../model/subject';
import { GlobalProvider } from '../../providers/globalProvider'
import { QuizPage } from '../../pages/quiz/quiz';

//import { global } from '@angular/core/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
subject: Subject = new Subject();
takeFullTest: Boolean;
changeSubject: Boolean;

  constructor(public navCtrl: NavController,public globalProvider:GlobalProvider) {
   
    this.takeFullTest = true;
    this.subject.isPhysics = true;
    this.subject.isChemistry = true;
    this.subject.isBiology = true;
  }


  changeTakeFullTest() {

      if ((!this.takeFullTest) && (!this.changeSubject)) {

        this.subject.isPhysics = false;
        this.subject.isChemistry = false;
        this.subject.isBiology = false;
      }else if(this.takeFullTest)  {
        this.subject.isPhysics = true;
        this.subject.isChemistry = true;
        this.subject.isBiology = true;
      } 

  }

  changesubject() {

    this.changeSubject = true;
    if(this.subject.isPhysics && this.subject.isChemistry && this.subject.isBiology) {
      this.takeFullTest = true;
    } else {
      this.takeFullTest = false;

    }
}


  submit() {
    
    this.globalProvider.setSubject(this.subject);
    this.navCtrl.push(QuizPage)
  
    console.log("the value of take full test ind" + this.takeFullTest);
    console.log("the value of take full test ind" + this.subject.isPhysics);
    console.log("the value of take full test ind" + this.subject.isChemistry);
    console.log("the value of take full test ind" + this.subject.isBiology);


  }

}
