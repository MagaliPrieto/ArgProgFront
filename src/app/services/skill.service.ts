import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { buildBackendUrl } from './base';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(buildBackendUrl('/skills'));
  }
}
