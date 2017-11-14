import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";
import { FormPoster } from "./form-poster.service";
import { NgForm } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {

    //test1:
    votes: number;
    title: string;
    link: string;

    constructor(private formPoster: FormPoster) {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }
    voteUp() {
        this.votes += 1;
        return false;
    }
    voteDown() {
        this.votes -= 1;
        return false;
    }

    hasPrimaryLanguageError: boolean = false;
    langues: string[] = ['English', 'Spanish', 'Other'];
    model = new Employee('', '', true, "W2", "default","11/11/2015" );

    product: any;

    firstNameToUpperCae(value: string): void {
        if (value.length > 0)
        {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
            console.log(this.model.firstName);
        }
        else
            this.model.firstName = value;
    }

    validatePrimaryLanguage(event: any) {
        if (this.model.primaryLanguage === "default")
            this.hasPrimaryLanguageError = true;
        else
            this.hasPrimaryLanguageError = false;
        console.log('lang: ' + this.model.primaryLanguage)
    }

    //submit form
    submitForm(form: NgForm) {
        //validate form
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if (this.hasPrimaryLanguageError)
            return

        //console.log(form.value);
        this.formPoster.postEmployeeForm(this.model)
            .subscribe(
                data => console.log('success: ', data),
                err => console.log('error: ', err)
            )
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }

    ngOnInit(): void {
        //this.formPoster.getProducts()
        //    .subscribe((product: any) => this.product = product);
        console.log("sss" + this.formPoster.getProducts());
    }

}