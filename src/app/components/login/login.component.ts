
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login-model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private fb: FormBuilder,private _loginService: LoginService,private route: Router) { }

  loginForm:any;
  login:LoginModel = new LoginModel();
  error:boolean = false;
  message:string = "";



  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required])
    })
  }
  get Username(){return this.loginForm.get('Username')};
  get Password(){return this.loginForm.get('Password')};




  // Consuming the Login Service 
  OnSubmit(loginForm:any)
  {
      console.log(this.loginForm.value);
      this._loginService.loginUser(loginForm).subscribe(result =>{
        var success = result;
        if(success)
        {
          console.log(this.loginForm.value);
          this.loginForm.reset();
          localStorage.setItem("result", JSON.stringify(success));
          this.route.navigate(['dashboard'])
        }
        else
        {
          this.error = true;
          this.message = "User Id/ Password Wrong";
        }
      })
      
  }
  

}
