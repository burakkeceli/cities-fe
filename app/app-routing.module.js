"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var city_general_component_1 = require("./city/general/city.general.component");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'city-general/:cityId', component: city_general_component_1.CityGeneralComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app-routing.module.js.map