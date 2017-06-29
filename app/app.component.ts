import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

import { AuthenticationService } from './service/authentication/authentication.service';
import { User } from './model/user/user'

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private userLoggedIn: boolean;
  private currentUser: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    let fetchedUser = localStorage.getItem('currentUser');
    if (fetchedUser != null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.authenticationService.isTokenExpired(this.currentUser.token);
    } else {
      this.userLoggedIn = false;
    }
  }

  ngOnDestroy(): void {
    console.log("unloadHandler" + event);
    console.log("unloadHandler" + event);
    localStorage.removeItem("currentUser");
    window.onbeforeunload = function () {
      return  "Are you sure want to LOGOUT the session ?";
    }; 
  }

  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    console.log("unloadHandler" + event);
    //localStorage.removeItem("currentUser");
  }

  @HostListener('window:beforeunload')
  beforeUnloadHander($event) {
    console.log("beforeUnloadHander1 " + event);
    this.closeWin();
    //localStorage.removeItem("currentUser");
    //return 'Dialog text here.';
  }

  closeWin(){
    var exit = confirm("Do you want to leave this window?");  
        if(exit==true){
          console.log("yes close " + event);
        } else {
          console.log("no dont close " + event);
        }
    }
}
