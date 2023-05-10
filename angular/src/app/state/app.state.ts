import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { SignInCredentials } from '../pages/sign-in/signin.model';
import { signInReducer } from './auth/auth.reducers';

export interface AppState {
  signIn: SignInCredentials;
  router: RouterReducerState<any>;
}


export const AuthReducers : ActionReducerMap<AppState> = {
  signIn: signInReducer,
  router: routerReducer
}; 


export const AuthMetaReducers: MetaReducer<AppState>[] = []