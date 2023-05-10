import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SignInCredentials } from '../../pages/sign-in/signin.model';
import { AppState } from '../app.state';

export const selectSignIn = (state: AppState) => state.signIn;

export const signInSelector = createSelector(selectSignIn, state => state);
