import { createReducer, on } from "@ngrx/store";
import { OrganisationOutputDto } from "src/app/models/organisation-output-dto";
import { organisationsFetchAPISuccess } from "./organisation.actions";

const initialState: Array<OrganisationOutputDto> = []

export const organisationReducer = createReducer(
  initialState,
  on(organisationsFetchAPISuccess, (state, { organisations }) => {
    return organisations;
  })
)