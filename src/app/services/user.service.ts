import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // private endpoint: string = 'https://retoolapi.dev/jXczqw/users';
  private endpoint: string = 'https://retoolapi.dev/sqCqEM/data';

  // Service For  Get All Users list From Database
  getAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.endpoint);
  }
}
