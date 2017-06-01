import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { ProductService } from "./product.service";
import { ShareModule } from "../shared/shared.module";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductEditComponent } from "./productEdit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({

    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
        ProductEditComponent
    ],

    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            },
            {
                path: 'productEdit/:id',
                //canActivate: [ProductDetailGuard],
                component: ProductEditComponent
            },
        ]),
        ShareModule,
        ReactiveFormsModule
    ],

    providers: [
        ProductService,
        ProductDetailGuard
    ]

})
export class ProductModule{ }