"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_model_1 = require("../models/employee.model");
var FormComponent = (function () {
    function FormComponent() {
        this.langues = ['English', 'Spanish', 'Other'];
        this.model = new employee_model_1.Employee('', 'Manh Cuong', true, "W2", "English", "11/11/2015");
    }
    FormComponent.prototype.firstNameToUpperCae = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
            console.log(this.model.firstName);
        }
        else
            this.model.firstName = value;
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'form.component.html'
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map