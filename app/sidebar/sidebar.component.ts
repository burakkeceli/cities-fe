import { Component, OnInit } from '@angular/core';
import { CitySearchService } from '../service/city/city-search.service';

@Component({
  moduleId: module.id,
  selector: 'cities-sidebar',
  templateUrl: 'sidebar.component.html'
  styleUrls: ['sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  private errorMessage: string;
  private cities: any[] = [];

  constructor(private citySearchService: CitySearchService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citySearchService.get()
      .subscribe(
        cities => {
          this.cities = cities;
          console.log(this.cities);
        },
        error  => this.errorMessage = <any>error
      );
  }
}