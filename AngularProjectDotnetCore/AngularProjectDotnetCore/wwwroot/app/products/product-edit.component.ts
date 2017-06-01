import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    product: IProduct;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _productService: ProductService,
        private router: Router) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        )
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe((product: IProduct) => this.product = product);
    }
        
}