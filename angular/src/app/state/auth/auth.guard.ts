import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { signInSelector } from "./auth.selectors";
import { AppState } from "../app.state";



@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {


    constructor(private store: Store<AppState>, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            return this.store.select(signInSelector).pipe(map(e => e.isLoggedIn || this.router.createUrlTree([''])));
    }
}