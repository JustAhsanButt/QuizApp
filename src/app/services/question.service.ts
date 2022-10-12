import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionModel } from '../models/question-model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  qm = new QuestionModel();
  constructor(private http:HttpClient) { }
  private endPoint:string = "https://www.localhost7291/api:";


  //Service to Get All Question List From Database
  getAllQuestions():Observable<QuestionModel[]>{
    return this.http.get<QuestionModel[]>(this.endPoint);
  }

  //Service to Post Question into Database
  WriteQuestion(qm:QuestionModel): Observable<QuestionModel>{
    return this.http.post<QuestionModel>(
      '${environment.baseUrl}/${this.endpoint}',
      qm
    );
  }
}
