import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganisationOutputDto } from '../models/organisation-output-dto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http:HttpClient) { }

  getAll() : Observable<OrganisationOutputDto[]>{
    return this.http.get<OrganisationOutputDto[]>(`${environment.apiRoot}/organisations`);
  }
}
