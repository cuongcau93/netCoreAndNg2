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
var customer_1 = require("./customer");
var forms_1 = require("@angular/forms");
//function ratingRange(c: AbstractControl): { [key: string]: boolean | null } {
//    if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
//        return { 'range': true };
//    }
//    return null
//}
function ratingRange(min, max) {
    return function (c) {
        if (c.value !== undefined && (isNaN(c.value)) || c.value < 1 || c.value > 5) {
            return { 'range': true };
        }
        return null;
    };
}
var CustomerComponent = (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
    }
    CustomerComponent.prototype.testData = function () {
        //set value parameter full
        //this.customerForm.setValue({
        //        firstName: 'Nguyen',
        //        lastName: 'Manh Cuong',
        //        email: 'cuongnm108@gmail.com',
        //        sendCatalog: true
        //    });
        //patchValue
        this.customerForm.patchValue({
            firstName: 'Nguyen'
        });
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            phone: ['', [forms_1.Validators.required]],
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true
        });
        //this.customerForm = new FormGroup({
        //    firstName: new FormControl(),
        //    lastName: new FormControl(),
        //    email: new FormControl(),
        //    sendCatalog: new FormControl(true)
        //});
    };
    //populateTestData(): void {
    //    this.customerForm.patchValue({
    //        firstName: 'Jack',
    //        lastName: 'Harkness',
    //        sendCatalog: false
    //    });
    //}
    CustomerComponent.prototype.save = function () {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    CustomerComponent.prototype.setNotification = function (notifyVia) {
        console.log(notifyVia);
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'customer.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map