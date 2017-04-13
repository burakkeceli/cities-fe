import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitySearchService } from '../../service/city/city-search.service';
import { CountrySearchService } from '../../service/country/country-search.service';
import { CommentService } from '../../service/comment/comment.service';
import { Subscription } from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'cities-city-general',
  templateUrl: 'city.general.component.html',
})
export class CityGeneralComponent implements OnInit {
  private cityId: string;
  private fetchedCity: any;
  private fetchedCountry: any = {};
  private isDataAvailable: boolean = false;
  private cityComments: any;
  private sub: any;

  private errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
    private citySearchService: CitySearchService,
    private countrySearchService: CountrySearchService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.cityId = params['cityId'];
      console.log("city id " + this.cityId);
      this.getCityDetails(this.cityId);
    });
  }

  getCityDetails(cityId: string): Subscription {
    return this.citySearchService.getCity(cityId)
      .subscribe(
      fetchedCity => {
        this.fetchedCity = fetchedCity;
        this.getCountry(this.fetchedCity.countryId);
        this.getComments(this.fetchedCity.id);
        console.log("fetched city: " + JSON.stringify({ data: this.fetchedCity }, null, 4));
        this.isDataAvailable = true;
      },
      error => this.errorMessage = <any>error
      );
  }

  getCountry(countryId: string) {
    this.countrySearchService.getCountry(countryId)
      .subscribe(
      fetchedCountry => {
        this.fetchedCountry = fetchedCountry;
      },
      error => this.errorMessage = <any>error
      );
  }

  getComments(cityId: string) {
    this.commentService.getCommentsOfCity(cityId)
      .subscribe(
      cityComments => {
        this.cityComments = cityComments;
        console.log(this.cityComments);
      },
      error => this.errorMessage = <any>error
      );
  }
}