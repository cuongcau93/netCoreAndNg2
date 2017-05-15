import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { ProductService } from "./product.service";
import { ShareModule } from "../shared/shared.module";
import { ProductFilterPipe } from "./product-filter.pipe";

@NgModule({

    declarations: [
        ProductListComponent,
        ProductFilterPipe
    ],

    imports: [

        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            //{
            //    path: 'product/: id',

            //},
        ]),
        ShareModule
    ],

    providers: [
        ProductService,
    ]
})
export class ProductModule{ }