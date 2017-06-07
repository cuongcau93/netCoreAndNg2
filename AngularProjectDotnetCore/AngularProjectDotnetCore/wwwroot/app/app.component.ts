import { Component } from '@angular/core';

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
    pageTitle: string = 'Acme Product Management';
}