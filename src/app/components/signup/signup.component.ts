import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   //Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    Username: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
    Role: new FormControl('',[Validators.required])
  })

  get Username(){return this.signUpForm.get('Username')};
  get Email(){return this.signUpForm.get('Email')};
  get Password(){return this.signUpForm.get('Password')};
  get Role(){return this.signUpForm.get('Role')};


  
  OnSubmit(signUpForm:any)
  {
    console.log(this.signUpForm.value);
    
  }

}
