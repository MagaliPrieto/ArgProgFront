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

  public createSkill(skill: Skill): Observable<string> {
    return this.http.post(buildBackendUrl('/skills/1'), skill, { responseType: 'text' });
  }

  public deleteSkill(skillId: number): Observable<any> {
    return this.http.delete(buildBackendUrl('/skills/' + skillId));
  }
}
