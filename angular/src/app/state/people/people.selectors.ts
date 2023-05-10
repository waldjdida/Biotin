import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PeopleState, Person } from "./people.state";
import { PersonOutputDto } from "src/app/models/person-output-dto";


export const peopleFeatureName = 'people';
export const personsFeatureName = 'persons';

const getPeopleState = createFeatureSelector<PeopleState>(peopleFeatureName);

export const peopleSelector = createSelector(getPeopleState, state => state.people);

export const peopleTotalCountSelector = createSelector(getPeopleState, state => state.totalCount);

export const selectBooks = createFeatureSelector<PersonOutputDto[]>(personsFeatureName);