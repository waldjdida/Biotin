import { createAction, props } from "@ngrx/store";
import { OrganisationOutputDto } from "src/app/models/organisation-output-dto";


enum OrganisationActionType {
    Loading = "[Organisation] Loading",
    InvokeOrganisationsApi = "[Organisation] Invoke Orgs Fetch API",
    FetchOrganisationApiSuccess = "[Organisation] Fetch API Success",
  }

export const invokeOrganisationsAPI = createAction(
  OrganisationActionType.InvokeOrganisationsApi
  );
   
  export const organisationsFetchAPISuccess = createAction(
    OrganisationActionType.FetchOrganisationApiSuccess,
    props<{ organisations: OrganisationOutputDto[] }>()
  );