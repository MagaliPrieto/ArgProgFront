import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JWTdto } from '../model/jwtdto.model';
import { Login } from '../model/login.model';
import { NewUser } from '../model/newUser.model';
import { buildBackendUrl } from './base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  public nuevoUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post(buildBackendUrl('/auth/user'), newUser);
  }

  public login(login: Login): Observable<JWTdto> {
    return this.httpClient.post<JWTdto>(buildBackendUrl('/auth/login'), login);
  }
}
