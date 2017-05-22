import { component, oninit } from "@angular/core";
import { employee } from "../models/employee.model";
import { formposter } from "./form-poster.service";
import { ngform } from "@angular/forms";

@component({
    moduleid: module.id,
    templateurl: 'form.component.html'
})

export class formcomponent implements oninit {

    constructor(private formposter: formposter){}

    hasprimarylanguageerror: boolean = false;
    langues: string[] = ['english', 'spanish', 'other'];
    model = new employee('', '', true, "w2", "default","11/11/2015" );

    product: any;

    firstnametouppercae(value: string): void {
        if (value.length > 0)
        {
            this.model.firstname = value.charat(0).touppercase() + value.slice(1);
            console.log(this.model.firstname);
        }
        else
            this.model.firstname = value;
    }

    validateprimarylanguage(event: any) {
        if (this.model.primarylanguage === "default")
            this.hasprimarylanguageerror = true;
        else
            this.hasprimarylanguageerror = false;
        console.log('lang: ' + this.model.primarylanguage)
    }

    //submit form
    submitform(form: ngform) {
        //validate form
        this.validateprimarylanguage(this.model.primarylanguage);
        if (this.hasprimarylanguageerror)
            return

        //console.log(form.value);
        this.formposter.postemployeeform(this.model)
            .subscribe(
                data => console.log('success: ', data),
                err => console.log('error: ', err)
            )
    }

    ngoninit(): void {
        
        console.log("sss"+this.formposter.getproducts());
    }
}

//import { Component } from '@angular/core';
//@Component({
//    selector: 'little-tour',
//    template: `
//    <input #newHero
//      (keyup.enter)="addHero(newHero.value)"
//      (blur)="addHero(newHero.value); newHero.value='' ">
//    <button (click)="addHero(newHero.value)">Add</button>
//    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
//  `
//})
//export class FormComponent {
//    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
//    addHero(newHero: string) {
//        if (newHero) {
//            this.heroes.push(newHero);
//        }
//    }
//}