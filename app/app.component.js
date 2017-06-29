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
var authentication_service_1 = require("./service/authentication/authentication.service");
var AppComponent = (function () {
    function AppComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var fetchedUser = localStorage.getItem('currentUser');
        if (fetchedUser != null) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.authenticationService.isTokenExpired(this.currentUser.token);
        }
        else {
            this.userLoggedIn = false;
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("unloadHandler" + event);
        console.log("unloadHandler" + event);
        localStorage.removeItem("currentUser");
        window.onbeforeunload = function () {
            return "Are you sure want to LOGOUT the session ?";
        };
    };
    AppComponent.prototype.unloadHandler = function (event) {
        console.log("unloadHandler" + event);
        //localStorage.removeItem("currentUser");
    };
    AppComponent.prototype.beforeUnloadHander = function ($event) {
        console.log("beforeUnloadHander1 " + event);
        this.closeWin();
        //localStorage.removeItem("currentUser");
        //return 'Dialog text here.';
    };
    AppComponent.prototype.closeWin = function () {
        var exit = confirm("Do you want to leave this window?");
        if (exit == true) {
            console.log("yes close " + event);
        }
        else {
            console.log("no dont close " + event);
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.HostListener('window:unload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "unloadHandler", null);
__decorate([
    core_1.HostListener('window:beforeunload'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "beforeUnloadHander", null);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map