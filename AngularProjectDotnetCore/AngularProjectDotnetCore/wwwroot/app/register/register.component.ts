import { Component, OnInit } from "@angular/core";
import { IUser } from "./user";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    constructor(private router: Router){}

    countrys: string[] = ['Hà Nội', 'Hải Phòng', 'Vĩnh Phúc'];

    hasCountryError: boolean = false;

    pageTitle: string = "Register";

    user: IUser = {
        userName: '',
        email: '',
        password: '',
        gender: '',
        country: 'default',
    };

    validateCountry(event: any) {
        if (this.user.country === "default")
            this.hasCountryError = true;
        else
            this.hasCountryError = false;
    }

    submitForm(form: NgForm): void {
        this.validateCountry(this.user.country);
        if (this.hasCountryError)
            return
            //this.router.navigate(['/products'])

    }

    ngOnInit(): void {
          
    }
}