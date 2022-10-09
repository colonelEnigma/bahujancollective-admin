import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ApiPaths } from "./enums";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public signIn(userData: User): Observable<HttpResponse<any>> {
    let urlPath = `${this.baseUrl}${ApiPaths.Auth}${ApiPaths.Login}/`;

    return this.http.post<any>(urlPath, userData, { observe: 'response' });
  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
