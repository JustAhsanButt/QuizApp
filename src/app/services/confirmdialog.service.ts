import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmdialogComponent } from '../components/confirmdialog/confirmdialog.component';
import { ConfirmDialogModel } from '../models/confirm-dialog-model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmdialogService {

  constructor(private dialog:MatDialog) { }
  

  openConfirmDialog(data: ConfirmDialogModel) : Observable<boolean>{
  {
    return this.dialog.open(ConfirmdialogComponent,{
      data,
      width:'400px',
      disableClose:true
    }).afterClosed();
  }
  }}


  // openConfirmDialog()
  // {
  //   this.dialog.open(ConfirmdialogComponent,{
  //     width:'400px',
  //     panelClass:'confirm-dialog-container',
  //     disableClose:true
  //   });
  // }
  
