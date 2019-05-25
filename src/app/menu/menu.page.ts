import { NavController, MenuController} from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html'
})
export class MenuPage {
  @Input() link: any;

  public appPages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/menu/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'logout'
    },
  ];

  constructor(private navCtrl:NavController, private menu:MenuController, private router: Router) {
   
      this.menu.enable(true, 'first');
      this.menu.open('first');
      this.setMain_page();  
   

  

  //    this.router.navigate(["/login"]);
  }

  
  ngOnInit() {
 //   this.router.navigate(["/login"]);
  }

  setMain_page() {
    this.navCtrl.navigateRoot('/menu/home');
//    this.navCtrl.navigateForward('/menu/home');
    console.log("coming here to load the mainPage")

  }

  
  closeMenu() {
    console.log("close menu ");
    this.menu.close();
  
  }
 }
