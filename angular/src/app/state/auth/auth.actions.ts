import { createAction } from '@ngrx/store';
import { SignInCredentials } from '../../pages/sign-in/signin.model';




export const handleSignIn = createAction(
    '[Sign In Page] Handle Sign In',
    (signin: SignInCredentials) => ({ signin }));



export const handleLogOut = createAction(
    '[Sign In Page] Handle Sign Log out',
    () => ({ email: undefined, password: undefined, isLoggedIn: false } as SignInCredentials));
