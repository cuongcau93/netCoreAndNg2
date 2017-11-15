import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from "@angular/forms";

import 'rxjs/add/operator/debounceTime';

@Component({
    moduleId: module.id,
    templateUrl: 'accounts.component.html',
})

export class AccountsComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}