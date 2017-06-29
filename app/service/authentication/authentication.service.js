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
var constant_service_1 = require("../constant/constant.service");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(_http, ConstantService) {
        this._http = _http;
        this.ConstantService = ConstantService;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var body = JSON.stringify({ username: username, password: password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.ConstantService.URL_BASE +
            this.ConstantService.CITIES +
            this.ConstantService.REGISTER, body, options)
            .map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.reload();
            }
        });
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.ConstantService.URL_BASE +
            this.ConstantService.CITIES +
            this.ConstantService.LOGIN +
            this.ConstantService.IS_TOKEN_EXPIRED)
            .map(function (res) { return res; });
        //.subscribe((res: Response) => res, err => {
        //    console.log('ERROR');
        //    //localStorage.removeItem("currentUser");
        //})
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constant_service_1.ConstantService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map