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

  public createProyecto(pro: Proyecto): Observable<string> {
    return this.http.post(buildBackendUrl('/projects/1'), pro, { responseType: 'text' });
  }

  public deleteProyecto(proId: number): Observable<any> {
    return this.http.delete(buildBackendUrl('/projects/' + proId));
  }
}
