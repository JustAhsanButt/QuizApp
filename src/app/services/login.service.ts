import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) {}
  
  // Declaring End Point Variable and Passing Back End Path
  private endpoint:string = 'auth/Login';

  // Declaring and Importing a Variable of LOGIN Model
  login:LoginModel = new LoginModel();



  
  // login Service For User
  loginUser(login:LoginModel): Observable<LoginModel>{
        return this.http.post<LoginModel>(
            '${environment.baseUrl}/${this.endpoint}',
            login
        );
      }



      
  
      
  




}
