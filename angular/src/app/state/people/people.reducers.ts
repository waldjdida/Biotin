import { createReducer, on } from "@ngrx/store";
import { invokeSaveNewPersonAPI, PersonsFetchAPISuccess as personsFetchAPISuccess, saveNewPersonAPISucess } from "./people.actions";
import { PersonOutputDto } from "src/app/models/person-output-dto";

const initialState: Array<PersonOutputDto> = []

export const personReducer = createReducer(
  initialState,
  on(personsFetchAPISuccess, (state, { people }) => {
    return people;
  }),
  on(invokeSaveNewPersonAPI, (state, { newPerson }) => {
    return state;
  }),
  on(saveNewPersonAPISucess, (state, { newPerson }) => {
    let newState = [...state];
    newState.unshift(newPerson);
    return newState;
  })
)