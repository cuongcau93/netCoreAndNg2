import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Injectable()
export class ProductService {
    //private _productUrl = '../api/products/product.json';
    private baseUrl = 'http://592e6b1cb6b9fa00114e6ed0.mockapi.io/product';
    product: IProduct[];
    constructor(private _http: Http) { };

    private extractData(response: Response) {
        let body = <IProduct>response.json();
        return body || {}
    }


    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.baseUrl)
            .map(this.extractData)
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getProduct(id: number): Observable<IProduct> {
        if (id === 0) {
            return Observable.of(this.initializeProduct());
        };
        const url = `${this.baseUrl}/${id}`;
        return this._http.get(url)
            .map((response: Response) => <IProduct[]>response.json())
            //.do(data => console.log('getProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    initializeProduct(): IProduct {
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
    }

    private createProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
        product.productId = undefined;
        return this._http.post(this.baseUrl, product, options)
            .map(this.extractData)
            //.do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
        const url = `${this.baseUrl}/${product.productId}`;
        return this._http.put(url, product, options)
            .map(this.extractData)
            .do(data => console.log('update Product: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProduct(product: IProduct): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if (product.productId === 0) {
            return this.createProduct(product, options);
        }
        return this.updateProduct(product, options);
    }

    deleteProduct(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const url = `${this.baseUrl}/${id}`;
        return this._http.delete(url, options)
            .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
}