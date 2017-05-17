import { NgModule } from "@angular/core";
import { FormComponent } from "./form.component";
import { RouterModule } from "@angular/router";
import { ShareModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        FormComponent
    ],

    imports: [
        RouterModule.forRoot([
            { path: 'form', component: FormComponent },
            //{
            //    path: 'product/: id',
            //},
        ]),
        ShareModule
    ]
})

export class FormModule{

}