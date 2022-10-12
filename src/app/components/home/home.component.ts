import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }
}
