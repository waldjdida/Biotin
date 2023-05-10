import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { OrganisationsComponent } from './organisations.component';

const routes: Routes = [
  {
    path: '',
    component: OrganisationsComponent,
  },
];

@NgModule({
  declarations: [
    OrganisationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes),
  ],
})
export class OrganisationsModule {}