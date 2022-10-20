import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { QuestionComponent } from '../question/question.component';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { ConfirmdialogService } from 'src/app/services/confirmdialog.service';




export interface PeriodicElement {
  Title: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'},
  { Title: 'What is @ViewChild and @ViewChildren In Angular'}


  
];

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent{
  
  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog, private _confirmeddialogService: ConfirmdialogService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(QuestionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  displayedColumns: string[] = ['Title','Action'];
 
  dataSource = ELEMENT_DATA;

  onDelete(){
    
      this._confirmeddialogService.openConfirmDialog({
        
        title: 'Alert!! Deletion',
        message: 'do you want to delete this Question?',
        confirmText:'Yes',
        cancelText: 'Not sure!',
      });
  }
  onEdit(){
    // this._confirmeddialogService.openConfirmDialog({
    //   title: 'Alert!! Edit',
    //   message: 'do you want to Edit this Question?',
    //   confirmText:'Yes',
    //   cancelText: 'Not sure!',
    // });
}

}


  
 
  

  



