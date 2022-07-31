import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';
import { buildBackendUrl } from './base';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  constructor(private http: HttpClient) { }

  public getEstudios(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(buildBackendUrl('/studies'));
  }
}
