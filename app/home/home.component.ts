import { Component, OnInit } from '@angular/core';
import { CitySearchService } from '../service/city/city-search.service';

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
  private cityComments: any;
  private commentText: string;

  constructor(private citySearchService: CitySearchService) {}

  ngOnInit() {    
    this.getCities();
  }

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
        console.log("city found");
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
        this.getComments(this.fetchedCity.id);
      },
      error => this.errorMessage = <any>error
    );
  }

  getCountry(countryId : string) {
  }

  getComments(cityId : string) {
  }

  addComment() {
  }
}
