import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLab } from '../model/experienciaLab.model';
import { buildBackendUrl } from './base';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLabService {
  constructor(private http: HttpClient) { }

  public getExperiencias(): Observable<ExperienciaLab[]> {
    return this.http.get<ExperienciaLab[]>(buildBackendUrl('/experiences'));
  }
}
