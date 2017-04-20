import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitySearchService } from '../../service/city/city-search.service';
import { CountrySearchService } from '../../service/country/country-search.service';
import { CommentService } from '../../service/comment/comment.service';
import { Subscription } from "rxjs";
import { CityComment } from '../../model/comment/comment'
import { User } from '../../model/user/user'

@Component({
  moduleId: module.id,
  selector: 'cities-city-general',
  templateUrl: 'city.general.component.html',
  styleUrls: ['city.component.css'],
})
export class CityGeneralComponent implements OnInit {
  private cityId: string;
  private fetchedCity: any;
  private fetchedCountry: any = {};
  private isDataAvailable: boolean = false;
  private cityComments: CityComment;
  private cityCommentList: any;
  private sub: any;
  private currentUser: User;
  private commentText: string;

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
      let currentUser = localStorage.getItem('currentUser');
      console.log("currentUser " + currentUser);
      if (currentUser != null) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
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
        console.log("comments fetched : " + JSON.stringify(cityComments));
        this.cityCommentList = cityComments;
        console.log("comment 1 : " + cityComments[0]);
      },
      error => this.errorMessage = <any>error
      );
  }

  addComment() {
    console.log(this.currentUser + " " + this.fetchedCity.id + " " + this.commentText);
    this.commentService.addCommentToCity(this.currentUser, this.fetchedCity.id, this.commentText)
    .subscribe(
      result => {
        this.getComments(this.fetchedCity.id);
      }
    )
  }
}