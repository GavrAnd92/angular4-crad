import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherCompComponent } from './myWork/teacher-comp/teacher-comp.component';
import { NewTeatherComponent } from './myWork/new-teather/new-teather.component';
import { NewStudentComponent} from './myWork/new-student/new-student.component';
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
  },
  {
    path: 'newStudent',
    component: NewStudentComponent
  }
];//ADD 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
