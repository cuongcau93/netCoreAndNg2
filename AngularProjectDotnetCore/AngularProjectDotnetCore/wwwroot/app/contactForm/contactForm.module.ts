import { NgModule } from "@angular/core";
import { ContactFormComponent } from "./contactForm.component";
import { RouterModule } from "@angular/router";
import { ShareModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ContactFormComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'contactForm', component: ContactFormComponent },
        ]),
        ShareModule,
    ]
})

export class ContactFormModule {

}