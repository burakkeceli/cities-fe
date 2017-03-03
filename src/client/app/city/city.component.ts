import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CountrySearchService } from '../shared/country/search/country-search.service';

/**
 * This class represents the lazy loaded CityComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'cities-city',
  templateUrl: 'city.component.html',
  inputs: [`fetchedCity`]
})
export class CityComponent {
  public fetchedCity : any;
  public fetchedCountry : any;

  constructor(public countrySearchService: CountrySearchService) {}

  onClick() {
    this.countrySearchService.getCountry(this.fetchedCity.countryId)
        .subscribe(
          fetchedCountry => this.fetchedCountry = fetchedCountry
    );
  }
}
