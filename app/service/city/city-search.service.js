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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var constant_service_1 = require("../constant/constant.service");
/**
 * This class provides the CitySearch service with methods to read names and add names.
 */
var CitySearchService = (function () {
    function CitySearchService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    CitySearchService.prototype.get = function () {
        var url = this.ConstantService.URL_BASE + this.ConstantService.CITIES + this.ConstantService.CITY;
        this.cities = this._http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return this.cities;
    };
    CitySearchService.prototype.getCity = function (cityId) {
        var url = this.ConstantService.URL_BASE + this.ConstantService.CITIES + this.ConstantService.CITY;
        var uri = url + '/' + cityId;
        return this._http.get(uri)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
      */
    CitySearchService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return CitySearchService;
}());
CitySearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constant_service_1.ConstantService])
], CitySearchService);
exports.CitySearchService = CitySearchService;
//# sourceMappingURL=city-search.service.js.map