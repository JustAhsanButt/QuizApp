import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:UserModel = new UserModel();
  

  constructor(private _userService:UserService, public fb:FormBuilder) { }

  ngOnInit(): void {
  }


  userDetailForm = this.fb.group({
    signupDate: new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    jobTitle:new FormControl(''),
    role: new FormControl(''),
    passportId: new FormControl(''),
    expiry:new FormControl(''),
    verified:new FormControl(''),
    status:new FormControl('')
  })
  get signupDate(){return this.userDetailForm.get('signupDate')}
  get name(){return this.userDetailForm.get('name')}
  get email(){return this.userDetailForm.get('email')}
  get jobTitle(){return this.userDetailForm.get('jobTitle')}
  get role(){return this.userDetailForm.get('role')}
  get passportId(){return this.userDetailForm.get('passportId')}
  get expiry(){return this.userDetailForm.get('expiry')}
  get verified(){return this.userDetailForm.get('verified')}
  get status(){return this.userDetailForm.get('status')}

}
