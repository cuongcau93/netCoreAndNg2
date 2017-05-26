import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer";
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from "@angular/forms";

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

@Component({
    moduleId: module.id,
    templateUrl: 'customer.component.html',
})

export class CustomerComponent implements OnInit {

    customerForm: FormGroup;
    customer: Customer = new Customer();

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
            email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+")]],
            phone: ['', [Validators.required]],
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
        console.log(notifyVia);
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }

}