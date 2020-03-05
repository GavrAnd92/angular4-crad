import { Component, OnInit } from '@angular/core';
import { Student} from '../../models/Student';
import { StudentService} from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-comp',
  templateUrl: './student-comp.component.html',
  styleUrls: ['./student-comp.component.css']
})
export class StudentCompComponent implements OnInit {



  students: Student [];
  editRowIdStudent: any = '';

  constructor(private service: StudentService, private router: Router) { 

    this.students = service.getStudent();
  }


  edit(val){
    this.editRowIdStudent = val;
  }

  remove(id){

    let index = this.students.findIndex(student => student.id ==id);

    this.students.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
