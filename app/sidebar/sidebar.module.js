"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var accordion_1 = require("ng2-bootstrap/accordion");
var sidebar_component_1 = require("./sidebar.component");
var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    core_1.NgModule({
        imports: [accordion_1.AccordionModule.forRoot()],
        declarations: [sidebar_component_1.SidebarComponent],
        exports: [sidebar_component_1.SidebarComponent]
    })
], SidebarModule);
exports.SidebarModule = SidebarModule;
//# sourceMappingURL=sidebar.module.js.map