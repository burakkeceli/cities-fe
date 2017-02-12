import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { CitySearchService } from '../shared/city-search/city-search.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  cityName: string = '';
  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  cities: any[] = [];
  searchResult: any = {
    country:{}
  };

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService,
              public citySearchService: CitySearchService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getCities();
  }

  /**
   * Handle the citySearchService observable
   */
  getCities(){
    this.citySearchService.get()
      .subscribe(
        cities => this.cities = cities,
        error  => this.errorMessage = <any>error
      );
  }

  searchCity() {
    this.cities.forEach( (city) => {
        if(city.name.toUpperCase() === this.cityName.toUpperCase()){
          this.citySearchService.getCity(city.id)
             .subscribe(
                searchResult => this.searchResult = searchResult,
                error => this.errorMessage = <any>error
             );
        }
    });
  }
}
