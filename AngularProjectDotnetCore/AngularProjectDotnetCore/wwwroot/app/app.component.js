"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { APP_BASE_HREF } from "@angular/common";
var AppComponent = (function () {
    function AppComponent() {
        //constructor( @Inject(APP_BASE_HREF) private baseHref: string) {
        //    console.log(this.baseHref);
        //}
        this.pageTitle = 'Acme Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div>\n        <nav class = 'navbar navbar-default'>\n            <div class = 'container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li>\n                        <a [routerLink] = \"['/welcome']\">Home</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/products']\">Product List</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/productEdit/0']\">Add Product</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/form']\">Form</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/register']\">Register</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/customer']\">Customer</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/summernote']\">Summernote</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/lol']\">Accounts</a>\n                    </li>\n                    <li>\n                        <a [routerLink] = \"['/contactForm']\">Contact Form</a>\n                    </li>\n               \n                </ul>\n            </div>\n        </nav>\n    </div>\n    <div class='container'>\n            <router-outlet></router-outlet>\n    </div>\n    ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map