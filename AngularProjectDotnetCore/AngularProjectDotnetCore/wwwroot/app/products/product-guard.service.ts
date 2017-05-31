import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(router: ActivatedRouteSnapshot): boolean {
        let id = +router.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}