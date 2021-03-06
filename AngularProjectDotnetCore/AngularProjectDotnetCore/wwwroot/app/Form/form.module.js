"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_component_1 = require("./form.component");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var form_poster_service_1 = require("./form-poster.service");
var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    core_1.NgModule({
        declarations: [
            form_component_1.FormComponent
        ],
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'form', component: form_component_1.FormComponent },
            ]),
            shared_module_1.ShareModule
        ],
        providers: [
            form_poster_service_1.FormPoster,
        ]
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map