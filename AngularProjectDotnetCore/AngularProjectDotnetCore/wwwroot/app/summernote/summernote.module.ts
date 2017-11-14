import { NgModule } from "@angular/core";
import { SummernoteComponent } from "./summernote.component";
import { ShareModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        SummernoteComponent
    ],

    imports: [
        RouterModule.forChild([
            { path: 'summernote', component: SummernoteComponent },
        ]),

        ShareModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
    ]
})

export class SummernoteModule {

}