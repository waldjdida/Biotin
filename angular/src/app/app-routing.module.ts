import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from './state/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/people/people.module').then((m) => m.PeopleModule),
    //canActivate: [AuthGuard],
  },
  { path: 'login', component: SignInComponent },
  {
    path: 'people',
    loadChildren: () =>
      import('./pages/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'organisations',
    loadChildren: () =>
      import('./pages/organisations/organisations.module').then(
        (m) => m.OrganisationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  SignInComponent,
  HomeComponent,
];
