import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { ProductService } from "./product.service";
import { ShareModule } from "../shared/shared.module";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailComponent } from "./product-detail.component";

@NgModule({

    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],

    imports: [

        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/: id',
                //canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            },
        ]),
        ShareModule
    ],

    providers: [
        ProductService,
    ]
})
export class ProductModule{ }