import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    
  })




  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
}
showToasterError(){
  this.notifyService.showError("Something is wrong", "tutsmake.com")
}

showToasterInfo(){
  this.notifyService.showInfo("This is info", "tutsmake.com")
}

showToasterWarning(){
  this.notifyService.showWarning("This is warning", "tutsmake.com")
}
}
