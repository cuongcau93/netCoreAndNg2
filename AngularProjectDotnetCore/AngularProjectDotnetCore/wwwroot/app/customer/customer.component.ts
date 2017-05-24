import { Component } from "@angular/core";
import { Customer } from "./customer";

@Component({
    moduleId: module.id,
    templateUrl: 'customer.component.html',
})

export class CustomerComponent {
    customer: Customer = new Customer();
}