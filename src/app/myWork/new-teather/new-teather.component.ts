import { Component, OnInit } from '@angular/core';
import { TeacherService} from '../services/teacher.service';
import { Router} from '@angular/router';
import { Teacher } from '../models/Teacher';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-teather',
  templateUrl: './new-teather.component.html',
  styleUrls: ['./new-teather.component.css']
})
export class NewTeatherComponent implements OnInit {


  model: Teacher = new Teacher(0,"","", 0, "");
  teachers: Teacher[]

  constructor(private service: TeacherService, private router: Router) {

    this.teachers = service.getTeacher();
    let arr = this.teachers.map(t => t.id);
    this.model.id = Math.max(...arr) + 1;
   }



   onSubmit(form: NgForm){

    this.teachers.push(this.model);
    this.router.navigate(['/teachers']);
   }


  ngOnInit(): void {
  }

}
