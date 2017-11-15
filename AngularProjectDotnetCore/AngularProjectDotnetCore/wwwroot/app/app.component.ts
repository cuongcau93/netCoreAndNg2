import { Component } from '@angular/core';
//import { APP_BASE_HREF } from "@angular/common";

@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav class = 'navbar navbar-default'>
            <div class = 'container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li>
                        <a [routerLink] = "['/welcome']">Home</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/products']">Product List</a>
                    </li>
                    <li>
                        <a [routerLink]="['/productEdit/0']">Add Product</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/form']">Form</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/register']">Register</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/customer']">Customer</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/summernote']">Summernote</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/lol']">Accounts</a>
                    </li>
                    <li>
                        <a [routerLink] = "['/contactForm']">Contact Form</a>
                    </li>
               
                </ul>
            </div>
        </nav>
    </div>
    <div class='container'>
            <router-outlet></router-outlet>
    </div>
    `,
})
export class AppComponent {
    //constructor( @Inject(APP_BASE_HREF) private baseHref: string) {
    //    console.log(this.baseHref);
    //}
    pageTitle: string = 'Acme Product Management';
}