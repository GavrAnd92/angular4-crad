import { Component, OnInit } from '@angular/core';
import { StudentService} from '../services/student.service';
import { Router} from '@angular/router';
import { Student } from '../models/Student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {


  model: Student = new Student(0,"",0,0, "", "");
  students: Student[]

  constructor(private service: StudentService, private router: Router) { 
    this.students = service.getStudent();
    let arr = this.students.map(t => t.id);
    this.model.id = Math.max(...arr) + 1;
  }



  onSubmit(form: NgForm){

    this.students.push(this.model);
    this.router.navigate(['/students']);
   }

  ngOnInit(): void {
  }

}
