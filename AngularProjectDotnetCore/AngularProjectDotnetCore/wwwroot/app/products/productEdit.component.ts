import { Component, OnInit, ViewChildren, ElementRef } from "@angular/core";
import { IProduct } from "./product";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { FormControlName, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GenericValidator } from "./generic-validator";

@Component({
    moduleId: module.id,
    templateUrl: 'productEdit.component.html'
})

export class ProductEditComponent implements OnInit {

    product: IProduct;
    private sub: Subscription;
    pageTitle: string = 'Product Edit';
    productFormEdit: FormGroup;
    private genericValidator: GenericValidator;

    displayMessage: { [key: string]: string } = {};
    private validationMesages: { [key: string]: { [key: string]: string } };

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    constructor(private _route: ActivatedRoute,
        private _productServices: ProductService,
        private router: Router,
        private fb: FormBuilder)
    {
        this.validationMesages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            }
        }
        this.genericValidator = new GenericValidator(this.validationMessages);

    }

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
            .subscribe((product: IProduct) => { this.onProductRetrieved(product) })
    }

    onProductRetrieved(product: IProduct): void {
        if (this.productFormEdit) {
            this.productFormEdit.reset();
        }

        this.product = product;

        if (this.product.productId === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }

        //Update the data on the form
        this.productFormEdit.patchValue({
            productName: this.product.productName
        })
    }
}