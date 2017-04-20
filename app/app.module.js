"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var ng2_bootstrap_3 = require("ng2-bootstrap");
var app_component_1 = require("./app.component");
var city_general_component_1 = require("./city/general/city.general.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var city_search_service_1 = require("./service/city/city-search.service");
var constant_service_1 = require("./service/constant/constant.service");
var authentication_service_1 = require("./service/authentication/authentication.service");
var country_search_service_1 = require("./service/country/country-search.service");
var comment_service_1 = require("./service/comment/comment.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            sidebar_component_1.SidebarComponent,
            city_general_component_1.CityGeneralComponent
        ],
        imports: [
            http_1.HttpModule,
            app_routing_module_1.routes,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.DatepickerModule.forRoot(),
            ng2_bootstrap_2.ModalModule.forRoot(),
            ng2_bootstrap_3.TabsModule.forRoot()
        ],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            city_search_service_1.CitySearchService,
            authentication_service_1.AuthenticationService,
            country_search_service_1.CountrySearchService,
            comment_service_1.CommentService,
            constant_service_1.ConstantService
        ],
        bootstrap: [app_component_1.AppComponent],
        exports: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map