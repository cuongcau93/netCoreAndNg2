import { Component, OnInit, ViewChildren, ElementRef } from "@angular/core";
import { IProduct } from "./product";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { FormControlName, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: 'productEdit.component.html'
})

export class ProductEditComponent implements OnInit {

    product: IProduct;
    private sub: Subscription;
    pageTitle: string = 'Product Edit';
    productFormEdit: FormGroup;

    displayMessage: { [key: string]: string } = {};

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    constructor(private _route: ActivatedRoute,
        private _productServices: ProductService,
        private router: Router,
        private fb: FormBuilder) { }

    ngOnInit(): void {

        this.productFormEdit = this.fb.group({
            productName: ['', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(50)]]
        })

        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        )

        this.productFormEdit.patchValue({
            productName: 'LOL'
        })


    }

    getProduct(id: number) {
        this._productServices.getPro(id)
            .subscribe((product: IProduct) => this.product = product);
    }

}