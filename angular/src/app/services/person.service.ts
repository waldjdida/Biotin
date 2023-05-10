import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonOutputDto } from '../models/person-output-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePersonInputDto } from '../models/create-person-input-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  getAll() : Observable<PersonOutputDto[]>{
    return this.http.get<PersonOutputDto[]>(`${environment.apiRoot}/people`);
  }

  create(body: CreatePersonInputDto) : Observable<PersonOutputDto>{
    return this.http.post<PersonOutputDto>(`${environment.apiRoot}/people`, body);
  }
}
