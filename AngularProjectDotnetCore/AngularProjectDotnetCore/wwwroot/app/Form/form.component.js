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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_model_1 = require("../models/employee.model");
var form_poster_service_1 = require("./form-poster.service");
var FormComponent = (function () {
    function FormComponent(formPoster) {
        this.formPoster = formPoster;
        this.hasPrimaryLanguageError = false;
        this.langues = ['English', 'Spanish', 'Other'];
        this.model = new employee_model_1.Employee('', '', true, "W2", "default", "11/11/2015");
    }
    FormComponent.prototype.firstNameToUpperCae = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
            console.log(this.model.firstName);
        }
        else
            this.model.firstName = value;
    };
    FormComponent.prototype.validatePrimaryLanguage = function (event) {
        if (this.model.primaryLanguage === "default")
            this.hasPrimaryLanguageError = true;
        else
            this.hasPrimaryLanguageError = false;
        console.log('lang: ' + this.model.primaryLanguage);
    };
    //submit form
    FormComponent.prototype.submitForm = function (form) {
        //validate form
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if (this.hasPrimaryLanguageError)
            return;
        //console.log(form.value);
        this.formPoster.postEmployeeForm(this.model)
            .subscribe(function (data) { return console.log('success: ', data); }, function (err) { return console.log('error: ', err); });
    };
    FormComponent.prototype.ngOnInit = function () {
        console.log("sss" + this.formPoster.getProducts());
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'form.component.html'
    }),
    __metadata("design:paramtypes", [form_poster_service_1.FormPoster])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map