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
  inputs: [`fetchedCity`, `fetchedCountry`]
})
export class CityComponent {
  private fetchedCity : any;
  private fetchedCountry : any;

  constructor(private countrySearchService: CountrySearchService) {}

  onClick() {
    this.countrySearchService.getCountry(this.fetchedCity.countryId)
        .subscribe(
          fetchedCountry => this.fetchedCountry = fetchedCountry
    );
  }
}
