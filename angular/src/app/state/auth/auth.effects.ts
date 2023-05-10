import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mapTo } from "rxjs";
import { handleSignIn } from "./auth.actions";


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions) {

    }

    // loadSignInCredentials$ = createEffect(() => this.actions$.pipe(
    //     ofType(signInEnter),
    //     mapTo(handleSignIn({email: 'khalil@email.com', password: 'pa$$w0rd'}))
    // ));
}