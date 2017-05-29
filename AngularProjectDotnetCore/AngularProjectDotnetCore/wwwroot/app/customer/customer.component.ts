import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from "@angular/forms";

import 'rxjs/add/operator/debounceTime';

//function ratingRange(c: AbstractControl): { [key: string]: boolean | null } {
//    if (c.value !== undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
//        return { 'range': true };
//    }
//    return null
//}

function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean | null } => {
        if (c.value !== undefined && (isNaN(c.value)) || c.value < min || c.value > max) {
            return { 'range': true };
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean | null } {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return {'match': true} ;
}

@Component({
    moduleId: module.id,
    templateUrl: 'customer.component.html',
})

export class CustomerComponent implements OnInit {

    customerForm: FormGroup;
    customer: Customer = new Customer();
    emailMessage: string;
    emailMessageFirstName: string;
    emailMessageRating: string;
    private validationMessage = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    private validationMessageFirstName = {
        required: 'Please enter your first name.',
        minlength: 'The first name must be longer than 3 characters.'
    };

    private validationMessageRating = {
        required: 'Please enter your first name.',
        minlength: 'The first name must be longer than 3 characters.'
    };
    constructor(private fb: FormBuilder) { }

    testData(): void {
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
    }

    ngOnInit(): void {

        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
                confirmEmail: ['', Validators.required],
            }, {validator: emailMatcher}),
            phone: ['', [Validators.required]],
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true
        });

        this.customerForm.get('notification').valueChanges
            .subscribe(value => this.setNotification(value));

        this.customerForm.get('firstName').valueChanges
            .subscribe(value => console.log(value));

        const emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.subscribe(value => {
                this.setMessage(emailControl);
            }
        );

        const firstNameControl = this.customerForm.get('firstName');
        firstNameControl.valueChanges.debounceTime(1000).subscribe(value => {
            this.setMessageFirstName(firstNameControl);
        }
        );

        const ratingControl = this.customerForm.get('rating');
        ratingControl.valueChanges.subscribe(value => {
            this.setMessageRating(ratingControl);
        }
        );
        
        //this.customerForm = new FormGroup({
        //    firstName: new FormControl(),
        //    lastName: new FormControl(),
        //    email: new FormControl(),
        //    sendCatalog: new FormControl(true)
        //});
    }

    //populateTestData(): void {
    //    this.customerForm.patchValue({
    //        firstName: 'Jack',
    //        lastName: 'Harkness',
    //        sendCatalog: false
    //    });
    //}

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessage[key]).join(' ');     
        }
    }

    setMessageFirstName(c: AbstractControl): void {
        this.emailMessageFirstName = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessageFirstName = Object.keys(c.errors).map(key => 
                this.validationMessageFirstName[key]).join(' ');
           (Object.keys(c.errors).map(key =>
                console.log('lol'+key)));
        }
    }

    setMessageRating(c: AbstractControl): void {
        this.emailMessageRating = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessageRating = Object.keys(c.errors).map(key =>
                this.validationMessageRating[key]).join(' ');
            (Object.keys(c.errors).map(key =>
                console.log('lol' + key)));
        }
    }

}