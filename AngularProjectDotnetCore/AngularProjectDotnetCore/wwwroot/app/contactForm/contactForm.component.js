"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactFormComponent = (function () {
    function ContactFormComponent() {
        this.disableCheckbox = false;
        this.arrContact = [
            { isEnable: true, isRequired: true, name: "Title" },
            { isEnable: true, isRequired: true, name: "Email" },
            { isEnable: true, isRequired: true, name: "First Name" },
            { isEnable: true, isRequired: true, name: "Last Name" },
            { isEnable: true, isRequired: true, name: "Profession" },
            { isEnable: true, isRequired: true, name: "Country Code" },
            { isEnable: true, isRequired: true, name: "Mobile Phone" },
            { isEnable: true, isRequired: true, name: "Type Of Meeting" },
            { isEnable: true, isRequired: false, name: "Company Name" },
            { isEnable: true, isRequired: true, name: "Institution Type" },
            { isEnable: false, isRequired: true, name: "Country" },
            { isEnable: true, isRequired: false, name: "City" },
            { isEnable: true, isRequired: false, name: "Company Telephone" },
            { isEnable: true, isRequired: true, name: "Agenda" },
            { isEnable: true, isRequired: false, name: "Attachments" },
            { isEnable: true, isRequired: false, name: "Language on the meeting" },
        ];
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.myMethod = function () {
        this.disableCheckbox = true;
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'contactForm.component.html',
        styleUrls: ['contactForm.component.css']
    })
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contactForm.component.js.map