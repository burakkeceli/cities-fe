import { Component, OnInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
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
