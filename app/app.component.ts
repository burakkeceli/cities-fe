import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  private userLoggedIn: boolean;

  ngOnInit() {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser != null) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }
}
