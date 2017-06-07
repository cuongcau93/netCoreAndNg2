"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var forms_1 = require("@angular/forms");
var generic_validator_1 = require("./generic-validator");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var number_validator_1 = require("../shared/number.validator");
var ProductEditComponent = (function () {
    function ProductEditComponent(_route, _productServices, router, fb) {
        this._route = _route;
        this._productServices = _productServices;
        this.router = router;
        this.fb = fb;
        this.pageTitle = 'Product Edit';
        this.displayMessage = {};
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
        };
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            return this.productFormEdit.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productFormEdit = this.fb.group({
            productName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            productCode: ['', forms_1.Validators.required],
            starRating: ['', number_validator_1.NumberValidators.range(1, 5)],
            tags: this.fb.array([]),
            description: ''
            //starRating: ['', NumberValidators.range(1, 5)]
        });
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
        this.productFormEdit.patchValue({
            productName: ''
        });
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productServices.getProduct(id)
            .subscribe(function (product) { _this.onProductRetrieved(product); });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        if (this.productFormEdit) {
            this.productFormEdit.reset();
        }
        this.product = product;
        if (this.product.productId === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
        //Update the data on the form
        this.productFormEdit.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description
        });
        this.productFormEdit.setControl('tags', this.fb.array(this.product.tags || []));
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        console.log('control: ' + controlBlurs);
        // Merge the blur evemt observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, [this.productFormEdit.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productFormEdit);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new forms_1.FormControl());
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productFormEdit.dirty && this.productFormEdit.valid) {
            var p = Object.assign({}, this.product, this.productFormEdit.value);
            this._productServices.saveProduct(p)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.productFormEdit.dirty) {
            this.onSaveComplete();
        }
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.productId === 0) {
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this._productServices.deleteProduct(this.product.productId)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.productFormEdit.reset();
        this.router.navigate(['/products']);
    };
    return ProductEditComponent;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], ProductEditComponent.prototype, "formInputElements", void 0);
ProductEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'productEdit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        product_service_1.ProductService,
        router_1.Router,
        forms_1.FormBuilder])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=productEdit.component.js.map