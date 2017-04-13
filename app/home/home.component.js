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
var city_search_service_1 = require("../service/city/city-search.service");
/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = (function () {
    function HomeComponent(citySearchService) {
        this.citySearchService = citySearchService;
        this.cityName = '';
        this.cities = [];
        this.fetchedCity = {};
        this.fetchedCountry = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    HomeComponent.prototype.getCities = function () {
        var _this = this;
        this.citySearchService.get()
            .subscribe(function (cities) { return _this.cities = cities; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.searchCity = function () {
        var _this = this;
        this.cities.forEach(function (city) {
            if (city.name.toUpperCase() === _this.cityName.toUpperCase()) {
                console.log("city found");
                _this.getCityDetails(city.id);
            }
        });
    };
    HomeComponent.prototype.getCityDetails = function (cityId) {
        var _this = this;
        this.citySearchService.getCity(cityId)
            .subscribe(function (fetchedCity) {
            _this.fetchedCity = fetchedCity;
            _this.getCountry(_this.fetchedCity.countryId);
            _this.getComments(_this.fetchedCity.id);
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getCountry = function (countryId) {
    };
    HomeComponent.prototype.getComments = function (cityId) {
    };
    HomeComponent.prototype.addComment = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
    }),
    __metadata("design:paramtypes", [city_search_service_1.CitySearchService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map