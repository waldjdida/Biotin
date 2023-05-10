import { PersonOutputDto } from "src/app/models/person-output-dto";



export interface Person {
    name: string;
    key: number;
    lastName: string;
  }

export interface PeopleState{
    people : Array<PersonOutputDto>,
    totalCount: number
}