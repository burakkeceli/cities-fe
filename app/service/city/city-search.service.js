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
var urls_1 = require("../../constant/urls");
// import 'rxjs/add/operator/do';  // for debugging
/**
 * This class provides the CitySearch service with methods to read names and add names.
 */
var CitySearchService = (function () {
    /**
     * Creates a new CitySearchService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    function CitySearchService(_http) {
        this._http = _http;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    CitySearchService.prototype.get = function () {
        console.log(urls_1.Urls.URL_BASE + urls_1.Urls.CITIES + urls_1.Urls.CITY);
        this.cities = this._http.get(urls_1.Urls.URL_BASE + urls_1.Urls.CITIES + urls_1.Urls.CITY)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return this.cities;
    };
    CitySearchService.prototype.getCity = function (cityId) {
        var uri = urls_1.Urls.URL_BASE + urls_1.Urls.CITIES + urls_1.Urls.CITY + '/' + cityId;
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
    __metadata("design:paramtypes", [http_1.Http])
], CitySearchService);
exports.CitySearchService = CitySearchService;
//# sourceMappingURL=city-search.service.js.map