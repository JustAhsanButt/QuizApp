import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.css']
})
export class QuestionanswerComponent implements OnInit {


  public name:string ="";
  public questionList:any =[];
  public currentQuestion:number = 0;


  public points:number=0;
  counter=60;
  correctAnswer:number = 0;
  inCorrectAnswer:number = 0;
  interval$:any;
  progress:string = "0";
  isQuizCompleted:Boolean = false;



  constructor(private _questionService: QuestionService) { }




  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }


  // consuming Question Service
  getAllQuestions(){
    this._questionService.getAllQuestions()
    .subscribe(data =>{
      this.questionList= data;
      console.log(data);
    })
  }


  // Next Question  Method
  nextQuestion()
  {
    this.currentQuestion++;
    this.resetCounter();
    //  this.stopCounter();
    //  this.startCounter();
  }


  // Previous Question Method
  previousQuestion()
  {
    this.currentQuestion --;
  }

  // Method to  add points for right answser
  answer(currentNo:number, option:any)
  {
    if(currentNo === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }

    if(option.correct)
    {
      this.points+=10;
      this.correctAnswer ++;
      setTimeout(() => {
      this.currentQuestion++
      this.resetCounter();
      this.getProgressPercent();
      }, 1000);
      
      
    }
    else
    {
      setTimeout(() => {
      this.currentQuestion++;
      this.inCorrectAnswer++;
      this.resetCounter();
      this.getProgressPercent();
      }, 1000);
      
      this.points-=10;
      
    }
  }


  startCounter()
  {
    this.interval$ = interval(1000)
    .subscribe(val =>{
      this.counter --;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter =60;
        this.points-=10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, (60000));
  }
  stopCounter()
  {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter()
  {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress="0";
  } 


  getProgressPercent()
  {
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }






}
