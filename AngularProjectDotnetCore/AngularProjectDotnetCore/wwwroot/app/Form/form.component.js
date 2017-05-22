//import { Component, OnInit } from "@angular/core";
//import { Employee } from "../models/employee.model";
//import { FormPoster } from "./form-poster.service";
//import { NgForm } from "@angular/forms";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//@Component({
//    moduleId: module.id,
//    templateUrl: 'form.component.html'
//})
//export class FormComponent implements OnInit {
//    constructor(private formPoster: FormPoster){}
//    hasPrimaryLanguageError: boolean = false;
//    langues: string[] = ['English', 'Spanish', 'Other'];
//    model = new Employee('', '', true, "W2", "default","11/11/2015" );
//    product: any;
//    firstNameToUpperCae(value: string): void {
//        if (value.length > 0)
//        {
//            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
//            console.log(this.model.firstName);
//        }
//        else
//            this.model.firstName = value;
//    }
//    validatePrimaryLanguage(event: any) {
//        if (this.model.primaryLanguage === "default")
//            this.hasPrimaryLanguageError = true;
//        else
//            this.hasPrimaryLanguageError = false;
//        console.log('lang: ' + this.model.primaryLanguage)
//    }
//    //submit form
//    submitForm(form: NgForm) {
//        //validate form
//        this.validatePrimaryLanguage(this.model.primaryLanguage);
//        if (this.hasPrimaryLanguageError)
//            return
//        //console.log(form.value);
//        this.formPoster.postEmployeeForm(this.model)
//            .subscribe(
//                data => console.log('success: ', data),
//                err => console.log('error: ', err)
//            )
//    }
//    ngOnInit(): void {
//        console.log("sss"+this.formPoster.getProducts());
//    }
//}
var core_1 = require("@angular/core");
var FormComponent = (function () {
    function FormComponent() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
    FormComponent.prototype.addHero = function (newHero) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'little-tour',
        template: "\n    <input #newHero\n      (keyup.enter)=\"addHero(newHero.value)\"\n      (blur)=\"addHero(newHero.value); newHero.value='' \">\n    <button (click)=\"addHero(newHero.value)\">Add</button>\n    <ul><li *ngFor=\"let hero of heroes\">{{hero}}</li></ul>\n  "
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map