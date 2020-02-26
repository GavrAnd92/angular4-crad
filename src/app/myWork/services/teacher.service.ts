import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher'; //add4

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  techers: Teacher[]
  constructor() { 
    this.techers = new Array<Teacher>(
      new Teacher(1, "Olexsandr", "Popkin", 30, "205"),
      new Teacher(2, "Vasiliy", "Vasilivich", 25, "301"),
      new Teacher(3, "Petr", "Petrovich", 40, "504"),
      );
  }


  getTeacher() : Teacher[]{
    return this.techers;
  }

  newTeacher(techer: Teacher){
    this.techers.push(techer);
  }
}
