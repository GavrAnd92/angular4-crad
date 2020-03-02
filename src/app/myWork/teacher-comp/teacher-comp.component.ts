import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher';//add4
import { TeacherService } from '../services/teacher.service';//add4
import { Router } from '@angular/router';//add4

@Component({
  selector: 'app-teacher-comp',
  templateUrl: './teacher-comp.component.html',
  styleUrls: ['./teacher-comp.component.css']
})
export class TeacherCompComponent implements OnInit {

  teachers: Teacher [];
  editRowId: any = '';
  constructor(private service: TeacherService, private router: Router) { 
    this.teachers = service.getTeacher();
  }

  edit(val){
    this.editRowId = val;
  }

  remove(id){

    let index = this.teachers.findIndex(teacher => teacher.id ==id);

    this.teachers.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
