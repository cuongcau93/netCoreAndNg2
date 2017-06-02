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
var ProductEditComponent = (function () {
    function ProductEditComponent(_route, _productServices, router, fb) {
        this._route = _route;
        this._productServices = _productServices;
        this.router = router;
        this.fb = fb;
        this.pageTitle = 'Product Edit';
        this.displayMessage = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productFormEdit = this.fb.group({
            productName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]]
        });
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
        this.productFormEdit.patchValue({
            productName: 'LOL'
        });
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productServices.getPro(id)
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
            productName: this.product.productName
        });
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