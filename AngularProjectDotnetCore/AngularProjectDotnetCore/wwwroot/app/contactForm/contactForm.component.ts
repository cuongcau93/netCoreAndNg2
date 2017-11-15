import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactForm.component.html',
    styleUrls: ['contactForm.component.css']
})

export class ContactFormComponent implements OnInit {

    disableCheckbox: boolean = false;

    arrContact: any = [
        { isEnable: true, isRequired: true, name: "Title" },
        { isEnable: true, isRequired: true, name: "Email" },
        { isEnable: true, isRequired: true, name: "First Name" },
        { isEnable: true, isRequired: true, name: "Last Name" },
        { isEnable: true, isRequired: true, name: "Profession" },
        { isEnable: true, isRequired: true, name: "Country Code" },
        { isEnable: true, isRequired: true, name: "Mobile Phone" },
        { isEnable: true, isRequired: true, name: "Type Of Meeting" },
        { isEnable: true, isRequired: false, name: "Company Name" },
        { isEnable: true, isRequired: true, name: "Institution Type" },
        { isEnable: false, isRequired: true, name: "Country" },
        { isEnable: true, isRequired: false, name: "City" },
        { isEnable: true, isRequired: false, name: "Company Telephone" },
        { isEnable: true, isRequired: true, name: "Agenda" },
        { isEnable: true, isRequired: false, name: "Attachments" },
        { isEnable: true, isRequired: false, name: "Language on the meeting" },
    ];

    ngOnInit(): void {
    }

    myMethod(): any {
        this.disableCheckbox = true;
    }

}