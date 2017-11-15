"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_component_1 = require("./customer.component");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        declarations: [
            customer_component_1.CustomerComponent,
        ],
        imports: [
            router_1.RouterModule.forChild([
                { path: 'customer', component: customer_component_1.CustomerComponent },
            ]),
            shared_module_1.ShareModule,
            forms_1.ReactiveFormsModule
        ]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map