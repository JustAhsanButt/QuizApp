import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route:Router) { }


  signUp(){
    
  }

  getToken()
  {
    return localStorage.getItem('access_token');
  }
  isLoggedIn():boolean{
      let authToken = localStorage.getItem('access_token');
      return authToken !== null ? true : false;
  }
  
  doLoggedOut()
  {
    let remove = localStorage.removeItem('access_token');
    if(remove==null)
    {
      this.route.navigate(['login']);
    }

  }
}
