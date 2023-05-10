import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { PersonsFetchAPISuccess as personsFetchAPISuccess, invokePersonsAPI, invokeSaveNewPersonAPI, saveNewPersonAPISucess } from './people.actions';
import { selectBooks as selectPersons } from './people.selectors';
 
@Injectable()
export class PersonEffect {
  constructor(
    private actions$: Actions,
    private PersonService: PersonService,
    private store: Store
  ) {}
 
  loadAllPersons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokePersonsAPI),
      withLatestFrom(this.store.pipe(select(selectPersons))),
      mergeMap(([, personfromStore]) => {

        if (personfromStore && personfromStore.length > 0) {
          return EMPTY;
        }
        return this.PersonService
          .getAll()
          .pipe(map((data) => personsFetchAPISuccess({ people: data })));
      })
    )
  );

  saveNewPerson$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewPersonAPI),
      switchMap((action) => {      
        return this.PersonService.create(action.newPerson).pipe(
          map((data) => {
            return saveNewPersonAPISucess({ newPerson: data });
          })
        );
      })
    );
  });
}