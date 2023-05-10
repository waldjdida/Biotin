import { createFeatureSelector } from "@ngrx/store";
import { OrganisationOutputDto } from "src/app/models/organisation-output-dto";

export const organisationsFeatureName = 'organisations';
export const selectOrganisations = createFeatureSelector<OrganisationOutputDto[]>(organisationsFeatureName);