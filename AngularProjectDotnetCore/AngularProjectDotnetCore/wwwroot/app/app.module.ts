import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";

import { HttpModule } from '@angular/http';
import { ProductModule } from "./products/product.module";
import { ProductListComponent } from "./products/product-list.component";
import { FormModule } from "./Form/form.module";
import { RegisterModule } from "./register/register.module";
import { CustomerModule } from "./customer/customer.module";
import { APP_BASE_HREF } from "@angular/common";
import { ContactFormModule } from "./contactForm/contactForm.module";


@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
        ]),
        ProductModule,
        FormModule,
        RegisterModule,
        CustomerModule,
        ContactFormModule
        //SummernoteModule
    ],

    declarations: [
        AppComponent,
        WelcomeComponent
    ],

    //providers: [{ provide: APP_BASE_HREF, useValue: '/Test' }],

    bootstrap: [AppComponent]
})
export class AppModule { }