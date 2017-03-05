import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { CitySearchService } from '../shared/city-search/city-search.service';
import { CityComponent } from '../city/city.component';
import { CountrySearchService } from '../shared/country/search/country-search.service';

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

  private cityName: string = '';
  private errorMessage: string;
  private cities: any[] = [];
  private fetchedCity: any = {};
  private fetchedCountry: any = {};

  constructor(private nameListService: NameListService,
              private citySearchService: CitySearchService,
              private countrySearchService: CountrySearchService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getCities();
  }

  /**
   * Handle the citySearchService observable
   */
  getCities() {
    this.citySearchService.get()
      .subscribe(
        cities => this.cities = cities,
        error  => this.errorMessage = <any>error
      );
  }
  
  searchCity() {
    this.cities.forEach((city) => {
      if (city.name.toUpperCase() === this.cityName.toUpperCase()) {
        this.getCityDetails(city.id);
      }
    });
  }

  getCityDetails(cityId : string) {
    this.citySearchService.getCity(cityId)
    .subscribe(
      fetchedCity => {
        this.fetchedCity = fetchedCity;
        this.getCountry(this.fetchedCity.countryId);
      },
      error => this.errorMessage = <any>error
    );
  }

  getCountry(countryId : string) {
    this.countrySearchService.getCountry(countryId)
    .subscribe(
      fetchedCountry => {
        this.fetchedCountry = fetchedCountry;
      },
      error => this.errorMessage = <any>error
    );
  }
}
