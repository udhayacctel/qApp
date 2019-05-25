import { Component } from '@angular/core';
import { NavController, MenuController} from '@ionic/angular';
import { Subject } from '../../model/subject';
import { GlobalProvider } from '../../providers/globalProvider';
import { HeaderColor } from '@ionic-native/header-color/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

subject: Subject = new Subject();
takeFullTest: Boolean;
changeSubject: Boolean;

  constructor(public navCtrl: NavController,public globalProvider:GlobalProvider,private headerColor: HeaderColor) {
   
    this.headerColor.tint('#becb29');
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
    //this.navCtrl.navigateRoot('/quiz');
    this.navCtrl.navigateForward('/quiz');
    
  
  }

}


