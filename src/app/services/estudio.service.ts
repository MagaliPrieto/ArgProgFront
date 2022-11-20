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

  public createEstudio(value: Estudio): Observable<string> {
    return this.http.post(buildBackendUrl('/studies/1'), value, { responseType: 'text'});
  }

  public deleteEstudio(estId: number): Observable<any> {
    return this.http.delete(buildBackendUrl('/studies/' + estId));
  }
}
