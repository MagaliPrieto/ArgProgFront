import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';
import { buildBackendUrl } from './base';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(buildBackendUrl('/projects'));
  }
}
