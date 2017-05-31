import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html'
})

export class ProductEditComponent {
    product: IProduct;

}