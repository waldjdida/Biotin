import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { handleSignIn } from '../../state/auth/auth.actions';
import { SignInCredentials } from './signin.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signIn: SignInCredentials | undefined;

  constructor(private store: Store) {
  }

  signInForm = new FormGroup({
    email: new FormControl('test@gmail.com', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('password', [
      Validators.required])
  });

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.signInForm.status === 'VALID') {
      this.store.dispatch(handleSignIn(this.signInForm.value));
    }
  }
}
