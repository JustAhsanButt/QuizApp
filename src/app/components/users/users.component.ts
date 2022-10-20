import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Title } from 'chart.js';
import { UserModel } from 'src/app/models/user-model';
import { ConfirmdialogService } from 'src/app/services/confirmdialog.service';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users!: UserModel[];
  

  constructor(
    private _userService: UserService,
    private route: Router,
    public dialog: MatDialog,
    private _confirmeddialogService: ConfirmdialogService
  ) {}

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

  displayedColumns: string[] = ['SignupDate','Name', 'Email','JobTitle', 'Role','PassportId','Expiry','Verified','Status', 'action'];


  openDialog() {
    const dialogRef = this.dialog.open(UserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete() {
    debugger;
    this._confirmeddialogService.openConfirmDialog({
      title: 'Alert !! Deletion',
      message: 'Do You Really Want To Delete This User?',
      confirmText: 'Yes',
      cancelText: 'Not Sure',
    });
  }

  onEdit() {
    const dialogRef = this.dialog.open(UserComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    
    // this._confirmeddialogService.openConfirmDialog({
    //   title: 'Alert !! Edit',
    //   message: 'Do You Really Want To Edit This User?',
    //   confirmText: 'Yes',
    //   cancelText: 'Not Sure',
    // });
  }


 selectedRow:any;

   onRowDoubleClicked(row:any)
   {
      this.selectedRow = row;
     const dialogRef = this.dialog.open(UserComponent);
   }

  onDoubleClick(row:any)
  {
     this.selectedRow = row;
    const dialogRef = this.dialog.open(UserComponent);
  }
}
