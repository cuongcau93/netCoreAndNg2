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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var FormPoster = (function () {
    //private _productUrl = 'http://localhost:58121/api/todo';
    function FormPoster(_http) {
        this._http = _http;
        this._productUrl = 'http://591d4e971c8911001140d25b.mockapi.io/student/employee';
    }
    FormPoster.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    FormPoster.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    FormPoster.prototype.postEmployeeForm = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://591d4e971c8911001140d25b.mockapi.io/student/employee', body, options)
            .map(this.extractData)
            .catch(this.handleErrorPost);
        //console.log('posting employee: ', employee);
    };
    FormPoster.prototype.extractData = function (res) {
        var body = res.json();
        return body.fields || {};
    };
    FormPoster.prototype.handleErrorPost = function (error) {
        console.log('Post error: ', error);
        return Observable_1.Observable.throw(error.statusText);
    };
    return FormPoster;
}());
FormPoster = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FormPoster);
exports.FormPoster = FormPoster;
//# sourceMappingURL=form-poster.service.js.map