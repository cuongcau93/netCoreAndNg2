import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

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
            firstName: { value: 'n/a', disabled: true },
            lastName: [''],
            email: '',
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
}