import { NgModule } from "@angular/core";
import { AccountsComponent } from "./accounts.component";
import { ShareModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AccountsComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'accounts', component: AccountsComponent },
        ]),
        ShareModule,
        ReactiveFormsModule
    ]
})

export class AccountsModule {

}