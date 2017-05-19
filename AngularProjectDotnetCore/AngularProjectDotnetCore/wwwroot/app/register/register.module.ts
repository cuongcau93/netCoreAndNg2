import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { ShareModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({

    declarations: [
        RegisterComponent,
    ],
    
    imports:[
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent },
            //{
            //    path: 'product/: id',
            //},
        ]),
        ShareModule
    ]

})

export class RegisterModule{

}