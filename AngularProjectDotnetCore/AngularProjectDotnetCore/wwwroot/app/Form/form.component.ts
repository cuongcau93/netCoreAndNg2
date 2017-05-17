import { Component } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
    moduleId: module.id,
    templateUrl: 'form.component.html'
})

export class FormComponent {
    langues: string[] = ['English', 'Spanish', 'Other'];
    model = new Employee('', 'Manh Cuong', true, "W2", "default","11/11/2015" );
    firstNameToUpperCae(value: string): void {
        if (value.length > 0)
        {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
            console.log(this.model.firstName);
        }
        else
            this.model.firstName = value;
    }

}