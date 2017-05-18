import { NgModule } from "@angular/core";
import { FormComponent } from "./form.component";
import { RouterModule } from "@angular/router";
import { ShareModule } from "../shared/shared.module";
import { FormPoster } from "./form-poster.service";

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
    ],

    providers: [
        FormPoster,
    ]
})

export class FormModule{

}