import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { signInSelector } from './state/auth/auth.selectors';
import { Observable } from 'rxjs';
import { SignInCredentials } from './pages/sign-in/signin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  signIn: Observable<SignInCredentials> | undefined;
 
  constructor(private store: Store<AppState>, private cdRef: ChangeDetectorRef ) {}


  ngOnInit(){
    this.signIn = this.store.select(signInSelector)
    this.cdRef.detectChanges();
  }

}
