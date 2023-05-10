import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { invokeOrganisationsAPI, organisationsFetchAPISuccess } from './organisation.actions';
import { selectOrganisations } from './organisation.selectors';
import { OrganisationService } from 'src/app/services/organisation.service';
 
@Injectable()
export class OrganisationEffect {
  constructor(
    private actions$: Actions,
    private organisationService: OrganisationService,
    private store: Store
  ) {}
 
  loadAllOrgs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeOrganisationsAPI),
      withLatestFrom(this.store.pipe(select(selectOrganisations))),
      mergeMap(([, orgsfromStore]) => {

        if (orgsfromStore && orgsfromStore.length > 0) {
          return EMPTY;
        }
        return this.organisationService
          .getAll()
          .pipe(map((data) => organisationsFetchAPISuccess({ organisations: data })));
      })
    )
  );
}