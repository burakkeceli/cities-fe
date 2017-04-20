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
var constant_service_1 = require("../constant/constant.service");
require("rxjs/add/operator/map");
var CommentService = (function () {
    function CommentService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    CommentService.prototype.getCommentsOfCity = function (cityId) {
        var uri = this.ConstantService.URL_BASE +
            this.ConstantService.CITIES +
            this.ConstantService.CITY + '/' + cityId +
            this.ConstantService.COMMENT;
        return this._http.get(uri)
            .map(function (res) {
            console.log("res.json() " + res.json());
            console.log("res " + res);
            return res.json();
        })
            .catch(this.handleError);
    };
    CommentService.prototype.addCommentToCity = function (user, cityId, commentText) {
        localStorage.getItem;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': user.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.ConstantService.URL_BASE +
            this.ConstantService.CITIES +
            this.ConstantService.CITY + '/' + cityId +
            this.ConstantService.COMMENT, commentText, options)
            .catch(this.handleError);
    };
    CommentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return CommentService;
}());
CommentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constant_service_1.ConstantService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map