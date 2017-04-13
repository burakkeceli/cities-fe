"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var city_search_service_1 = require("../../service/city/city-search.service");
var country_search_service_1 = require("../../service/country/country-search.service");
var comment_service_1 = require("../../service/comment/comment.service");
var CityGeneralComponent = (function () {
    function CityGeneralComponent(activatedRoute, citySearchService, countrySearchService, commentService) {
        this.activatedRoute = activatedRoute;
        this.citySearchService = citySearchService;
        this.countrySearchService = countrySearchService;
        this.commentService = commentService;
        this.fetchedCountry = {};
        this.isDataAvailable = false;
    }
    CityGeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.cityId = params['cityId'];
            console.log("city id " + _this.cityId);
            _this.getCityDetails(_this.cityId);
        });
    };
    CityGeneralComponent.prototype.getCityDetails = function (cityId) {
        var _this = this;
        return this.citySearchService.getCity(cityId)
            .subscribe(function (fetchedCity) {
            _this.fetchedCity = fetchedCity;
            _this.getCountry(_this.fetchedCity.countryId);
            _this.getComments(_this.fetchedCity.id);
            console.log("fetched city: " + JSON.stringify({ data: _this.fetchedCity }, null, 4));
            _this.isDataAvailable = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    CityGeneralComponent.prototype.getCountry = function (countryId) {
        var _this = this;
        this.countrySearchService.getCountry(countryId)
            .subscribe(function (fetchedCountry) {
            _this.fetchedCountry = fetchedCountry;
        }, function (error) { return _this.errorMessage = error; });
    };
    CityGeneralComponent.prototype.getComments = function (cityId) {
        var _this = this;
        this.commentService.getCommentsOfCity(cityId)
            .subscribe(function (cityComments) {
            _this.cityComments = cityComments;
            console.log(_this.cityComments);
        }, function (error) { return _this.errorMessage = error; });
    };
    return CityGeneralComponent;
}());
CityGeneralComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cities-city-general',
        templateUrl: 'city.general.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        city_search_service_1.CitySearchService,
        country_search_service_1.CountrySearchService,
        comment_service_1.CommentService])
], CityGeneralComponent);
exports.CityGeneralComponent = CityGeneralComponent;
//# sourceMappingURL=city.general.component.js.map