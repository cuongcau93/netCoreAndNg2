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
require("rxjs/add/operator/debounceTime");
//function ratingRange(c: AbstractControl): { [key: string]: boolean | null } {
//    if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
//        return { 'range': true };
//    }
//    return null
//}
function ratingRange(min, max) {
    return function (c) {
        if (c.value !== undefined && (isNaN(c.value)) || c.value < min || c.value > max) {
            return { 'range': true };
        }
        return null;
    };
}
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var CustomerComponent = (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
        this.validationMessage = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
        this.validationMessageFirstName = {
            required: 'Please enter your first name.',
            minlength: 'The first name must be longer than 3 characters.'
        };
        this.validationMessageRating = {
            required: 'Please enter your first name.',
            minlength: 'The first name must be longer than 3 characters.'
        };
    }
    Object.defineProperty(CustomerComponent.prototype, "addresses", {
        get: function () {
            return this.customerForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
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
        var _this = this;
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
                confirmEmail: ['', forms_1.Validators.required],
            }, { validator: emailMatcher }),
            phone: ['', [forms_1.Validators.required]],
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });
        this.customerForm.get('notification').valueChanges
            .subscribe(function (value) { return _this.setNotification(value); });
        this.customerForm.get('firstName').valueChanges
            .subscribe(function (value) { return console.log(value); });
        var emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.subscribe(function (value) {
            _this.setMessage(emailControl);
        });
        var firstNameControl = this.customerForm.get('firstName');
        firstNameControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            _this.setMessageFirstName(firstNameControl);
        });
        var ratingControl = this.customerForm.get('rating');
        ratingControl.valueChanges.subscribe(function (value) {
            _this.setMessageRating(ratingControl);
        });
        //this.customerForm = new FormGroup({
        //    firstName: new FormControl(),
        //    lastName: new FormControl(),
        //    email: new FormControl(),
        //    sendCatalog: new FormControl(true)
        //});
    };
    CustomerComponent.prototype.populateTestData = function () {
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            sendCatalog: false
        });
    };
    CustomerComponent.prototype.save = function () {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    CustomerComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    CustomerComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessage[key];
            }).join(' ');
        }
    };
    CustomerComponent.prototype.setMessageFirstName = function (c) {
        var _this = this;
        this.emailMessageFirstName = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessageFirstName = Object.keys(c.errors).map(function (key) {
                return _this.validationMessageFirstName[key];
            }).join(' ');
            (Object.keys(c.errors).map(function (key) {
                return console.log('lol' + key);
            }));
        }
    };
    CustomerComponent.prototype.setMessageRating = function (c) {
        var _this = this;
        this.emailMessageRating = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessageRating = Object.keys(c.errors).map(function (key) {
                return _this.validationMessageRating[key];
            }).join(' ');
            (Object.keys(c.errors).map(function (key) {
                return console.log('lol' + key);
            }));
        }
    };
    //Refactor
    CustomerComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: 'home',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    };
    CustomerComponent.prototype.addAddress = function () {
        this.addresses.push(this.buildAddress());
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