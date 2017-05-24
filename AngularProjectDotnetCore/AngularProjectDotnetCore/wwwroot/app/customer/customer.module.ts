import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { ShareModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        CustomerComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'customer', component: CustomerComponent },
            //{
            //    path: 'product/: id',
            //},
        ]),
        ShareModule,
    ]
})

export class CustomerModule {

}