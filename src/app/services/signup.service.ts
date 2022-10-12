import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpModel } from '../models/sign-up-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

private endpoint:string = 'auth/SignUp';


// Object of Model 
signUp:SignUpModel = new SignUpModel();



// SignUp Service
public signUpUser(signUp:SignUpModel): Observable<SignUpModel>
{
    return this.http.post<SignUpModel>(
      '${enviornment.baseUrl}/${this.endpoint}',
      signUp
    );
}


}
