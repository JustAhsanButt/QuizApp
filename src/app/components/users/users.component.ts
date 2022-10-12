import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  
  users!: UserModel[];

  constructor(private _userService: UserService, private route: Router) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    // consume service
    console.log('Get All Service Is Called Here....');
    this._userService.getAllUser().subscribe((data) => {
      debugger;
      this.users = data;
      console.log(this.users);
    });
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['Name', 'Email', 'Role'];
}
