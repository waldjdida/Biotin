import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { CreatePersonInputDto } from "src/app/models/create-person-input-dto";
import { PersonOutputDto } from "src/app/models/person-output-dto";


enum PersonActionType {
    Loading = "[Person] Loading",
    InvocePersonsApi = "[Person] Invoke Persons Fetch API",
    FetchPersonApiSuccess = "[Person] Fetch API Success",
    InvokeSaveNewPersonAPI = "[Person] Invoke save new person",
  }

export const invokePersonsAPI = createAction(
    PersonActionType.InvocePersonsApi
  );
   
  export const PersonsFetchAPISuccess = createAction(
    PersonActionType.FetchPersonApiSuccess,
    props<{ people: PersonOutputDto[] }>()
  );


  export const invokeSaveNewPersonAPI = createAction(
    PersonActionType.InvokeSaveNewPersonAPI,
    props<{ newPerson: CreatePersonInputDto }>()
  );

  export const saveNewPersonAPISucess = createAction(
    '[Person API] save new person api success',
    props<{ newPerson: PersonOutputDto }>()
  );