import { createReducer, on } from '@ngrx/store';

import { handleLogOut, handleSignIn } from './auth.actions';
import { SignInCredentials } from '../../pages/sign-in/signin.model';

export const signInInitialState: SignInCredentials = { email: undefined, password: undefined , isLoggedIn: false};

export const signInReducer = createReducer(
    signInInitialState,
    on(handleSignIn, (state, props) => ({...props.signin, isLoggedIn: true})),
    on(handleLogOut, (state, props) => ({...props}))
);