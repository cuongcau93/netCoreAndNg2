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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        //private _productUrl = '../api/products/product.json';
        this.baseUrl = 'http://592e6b1cb6b9fa00114e6ed0.mockapi.io/product';
    }
    ;
    ProductService.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.baseUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProductService.prototype.getProduct = function (id) {
        if (id === 0) {
            return Observable_1.Observable.of(this.initializeProduct());
        }
        ;
        var url = this.baseUrl + "/" + id;
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.initializeProduct = function () {
        // Return an initialized object
        return {
            productId: 0,
            productName: null,
            productCode: null,
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    };
    ProductService.prototype.createProduct = function (product, options) {
        product.productId = undefined;
        return this._http.post(this.baseUrl, product, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product, options) {
        var url = this.baseUrl + "/" + product.productId;
        return this._http.put(url, product, options)
            .map(this.extractData)
            .do(function (data) { return console.log('update Product: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.saveProduct = function (product) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (product.productId === 0) {
            return this.createProduct(product, options);
        }
        return this.updateProduct(product, options);
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.baseUrl + "/" + id;
        return this._http.delete(url, options)
            .do(function (data) { return console.log('deleteProduct: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map