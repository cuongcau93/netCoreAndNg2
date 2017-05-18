import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Employee } from "../models/employee.model";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class FormPoster {
    private _productUrl = 'http://591d4e971c8911001140d25b.mockapi.io/student/employee';


    constructor(private _http: Http) {

    }

    getProducts(): Observable<any> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    postEmployeeForm(employee: Employee): Observable<any> {
        let body = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('http://591d4e971c8911001140d25b.mockapi.io/student/employee', body, options)
            .map(this.extractData)
            .catch(this.handleErrorPost);
        //console.log('posting employee: ', employee);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.fields || {};
    }

    private handleErrorPost(error: any) {
        console.log('Post error: ', error);
        return Observable.throw(error.statusText);
    }

}