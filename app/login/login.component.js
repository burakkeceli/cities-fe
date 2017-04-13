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
var authentication_service_1 = require("../service/authentication/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        console.log(this.username + this.password);
        this.authenticationService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onSubmit = function (value) {
        console.log(this.username);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cities-login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map