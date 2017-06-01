import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {
    //private _productUrl = '../api/products/product.json';
    private baseUrl = 'http://592e6b1cb6b9fa00114e6ed0.mockapi.io/product';
    product: IProduct[];
    constructor(private _http: Http) { };

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.baseUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
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
            .do(data => console.log('getProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPro(id: number): Observable<IProduct> {
        if (id === 0) {
            return Observable.of(this.initializeProduct());
        };
        const url = `${this.baseUrl}/${id}`;
        return this._http.get(url)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('lol: ' + JSON.stringify(data)))
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
}