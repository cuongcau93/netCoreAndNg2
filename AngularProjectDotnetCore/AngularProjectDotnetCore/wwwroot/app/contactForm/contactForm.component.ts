import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'contactForm.component.html',
    styleUrls: ['contactForm.component.css']
})

export class ContactFormComponent implements OnInit {
    ContactFormComponent() {

    }

    lstContact: string[] = ["Nguyen", "Manh", "Cuong"];

    ngOnInit(): void {
        console.log('123');
    }

}