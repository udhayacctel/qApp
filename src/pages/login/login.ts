import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { GooglePlus } from '@ionic-native/google-plus';



@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
  })

export class LoginPage {

    constructor () {

    }

submit() {

    console.log("value in submit")
    
    GooglePlus.login({
		'scopes': '', 
		'webClientId': '1000310510769-d9o4rm28j7ibo3estvg8sgk888iro6o9.apps.googleusercontent.com', 
        'offline': true})
        .then(user =>{
             console.log(user)
    }, (err) =>{
		    console.log(err)
    });
}

}
