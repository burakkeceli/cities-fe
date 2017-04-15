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
var Observable_1 = require("rxjs/Observable");
var urls_1 = require("../../constant/urls");
/**
 * This class provides the CountrySearch service with methods to read names and add names.
 */
var CountrySearchService = (function () {
    function CountrySearchService(_http) {
        this._http = _http;
    }
    CountrySearchService.prototype.getCountry = function (countryId) {
        var uri = urls_1.Urls.URL_BASE + urls_1.Urls.CITIES + urls_1.Urls.COUNTRY + '/' + countryId;
        return this._http.get(uri)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CountrySearchService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return CountrySearchService;
}());
CountrySearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CountrySearchService);
exports.CountrySearchService = CountrySearchService;
//# sourceMappingURL=country-search.service.js.map