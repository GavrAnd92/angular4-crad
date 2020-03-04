import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherCompComponent } from './myWork/teacher-comp/teacher-comp.component';
import { NewTeatherComponent } from './myWork/new-teather/new-teather.component';
import { StudentCompComponent } from './myWork/student-comp/student-comp/student-comp.component';


const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherCompComponent
  },
  {
    path: 'newTeacher',
    component: NewTeatherComponent
  },
  {
    path: 'students',
    component: StudentCompComponent
  }
];//ADD 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
