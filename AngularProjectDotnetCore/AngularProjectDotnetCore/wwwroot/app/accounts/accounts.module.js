"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var accounts_component_1 = require("./accounts.component");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var AccountsModule = (function () {
    function AccountsModule() {
    }
    return AccountsModule;
}());
AccountsModule = __decorate([
    core_1.NgModule({
        declarations: [
            accounts_component_1.AccountsComponent,
        ],
        imports: [
            router_1.RouterModule.forChild([
                { path: 'accounts', component: accounts_component_1.AccountsComponent },
            ]),
            shared_module_1.ShareModule,
            forms_1.ReactiveFormsModule
        ]
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map