import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { CitySearchService } from '../shared/city-search/city-search.service';
import { CityModule } from '../city/city.module';
import { CountrySearchService } from '../shared/country/search/country-search.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, CityModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService, CitySearchService, CountrySearchService]
})
export class HomeModule { }
