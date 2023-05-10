import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { PeopleComponent } from './people.component';
import { personReducer } from 'src/app/state/people/people.reducers';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialog } from './add-person/add-person-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { personsFeatureName } from 'src/app/state/people/people.selectors';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffect } from 'src/app/state/people/people.effects';
import {MatSelectModule} from '@angular/material/select';
import { organisationsFeatureName } from 'src/app/state/organisations/organisation.selectors';
import { organisationReducer } from 'src/app/state/organisations/organisation.reducers';
import { OrganisationEffect } from 'src/app/state/organisations/organisation.effects';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
  },
];

@NgModule({
  declarations: [
    PeopleComponent,
    DialogContentExampleDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(personsFeatureName, personReducer),
    StoreModule.forFeature(organisationsFeatureName, organisationReducer),
    EffectsModule.forFeature([PersonEffect,OrganisationEffect])
  ],
})
export class PeopleModule {}