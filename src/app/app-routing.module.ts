import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionanswerComponent } from './components/questionanswer/questionanswer.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path:'users', component: UsersComponent},
  {path:'home', component: HomeComponent},
  // {path:'question', component: QuestionComponent  },
  {path:'questionanswer',component:QuestionanswerComponent},
  {path:'question', component:QuestionDetailComponent},
  {path:'user', component: UserComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
