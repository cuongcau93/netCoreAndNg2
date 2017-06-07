import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from "@angular/core";
import { IProduct } from "./product";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { FormControlName, FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { GenericValidator } from "./generic-validator";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { NumberValidators } from "../shared/number.validator";


@Component({
    moduleId: module.id,
    templateUrl: 'productEdit.component.html'
})

export class ProductEditComponent implements OnInit, AfterViewInit {

    product: IProduct;
    private sub: Subscription;
    pageTitle: string = 'Product Edit';
    productFormEdit: FormGroup;
    private genericValidator: GenericValidator;
    errorMessage: string;
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    get tags(): FormArray {
        return <FormArray>this.productFormEdit.get('tags');
    }

    constructor(private _route: ActivatedRoute,
        private _productServices: ProductService,
        private router: Router,
        private fb: FormBuilder)
    {
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }

        }
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
    
        this.productFormEdit = this.fb.group({
            productName: ['', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)]],
            productCode: ['', Validators.required],
            starRating: ['', NumberValidators.range(1, 5)],
            tags: this.fb.array([]),
            description: ''

            //starRating: ['', NumberValidators.range(1, 5)]
        });

        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );

        this.productFormEdit.patchValue({
            productName: ''
        });
    }

    getProduct(id: number) {
        this._productServices.getProduct(id)
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
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description
        });

        this.productFormEdit.setControl('tags', this.fb.array(this.product.tags || []));

    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
        console.log('control: ' + controlBlurs);

        // Merge the blur evemt observable with the valueChanges observable
        Observable.merge(this.productFormEdit.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.productFormEdit);
        });
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    saveProduct(): void {
        if (this.productFormEdit.dirty && this.productFormEdit.valid) {
            let p = Object.assign({}, this.product, this.productFormEdit.value);
            this._productServices.saveProduct(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.productFormEdit.dirty) {
            this.onSaveComplete();
        }
    }

    deleteProduct(): void {
        if (this.product.productId === 0) {
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this._productServices.deleteProduct(this.product.productId)
                    .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.productFormEdit.reset();
        this.router.navigate(['/products']);
    }

}