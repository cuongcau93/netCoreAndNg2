import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { IProduct } from "./product";
import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product: IProduct;
    private sub: Subscription;

    pageTitle: string = 'Product Detail';
    constructor(private _route: ActivatedRoute,
        private _productService: ProductService,
        private router: Router) { }

    ngOnInit(): void {
        let id = + this._route.snapshot.params['id'];

        this.sub = this._route.params.subscribe(
            params => {
                let id2 = +params['id'];
                this.getProduct(id2);
            }
        )

        //console.log("id: =" + id);

        //this.getProduct(id);
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe((product: IProduct) => this.product = product);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
    
}