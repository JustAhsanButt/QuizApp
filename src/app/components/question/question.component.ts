import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // creating an Array For Questions with Empty Values
  questionsArray = new FormArray([new FormControl('', Validators.required)])

  constructor() { }

  ngOnInit(): void {
  }


  addRow()
  {
      this.questionsArray.push(new FormControl('', Validators.required));
  }
  removeRow()
  {
    this.questionsArray.removeAt(1);
  }






  // ==========================

  // title= 'FormArray';
  // items!: FormArray;

  // reactform = new FormGroup({
  //   code: new FormControl('',Validators.required),
  //   name: new FormControl('',Validators.required),
  //   deliveryAddress: new FormArray([])
  // });


  // proceedSave(){console.log(this.reactform.value);}

  // AddNewRow()
  // {
  //   this.items = this.reactform.get("deliveryAddress") as FormArray;
  //   this.items.push(this.GenerateRow());
  // }

  // get deliveryAddress(){return this.reactform.get("deliveryAddress")as FormArray;}

  // GenerateRow():FormGroup{
  //   return new FormGroup({
  //     street: new FormControl('',Validators.required),
  //     city: new FormControl('',Validators.required),
  //     state: new FormControl('',Validators.required),
  //     zip: new FormControl('',[Validators.required, Validators.maxLength(6)])
  //   });
  // }


  // RemoveItem(index:any){
  //   this.items = this.reactform.get("deliveryAddress") as FormArray;
  //   this.items.removeAt(index);
  // }
}
