import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) { }

    product: IProduct[];
    pro: IProduct;
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = 'Product List';

    listFiter: string = 'Saw';

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((product: IProduct[]) => this.product = product);

        
        this._productService.getProduct(1)
            .subscribe((product: IProduct) => this.pro = product);

    }

}