"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var summernote_component_1 = require("./summernote.component");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var SummernoteModule = (function () {
    function SummernoteModule() {
    }
    return SummernoteModule;
}());
SummernoteModule = __decorate([
    core_1.NgModule({
        declarations: [
            summernote_component_1.SummernoteComponent
        ],
        imports: [
            router_1.RouterModule.forChild([
                { path: 'summernote', component: summernote_component_1.SummernoteComponent },
            ]),
            shared_module_1.ShareModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
        ]
    })
], SummernoteModule);
exports.SummernoteModule = SummernoteModule;
//# sourceMappingURL=summernote.module.js.map