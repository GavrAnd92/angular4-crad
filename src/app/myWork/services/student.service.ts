import { Injectable } from '@angular/core';
import { Student} from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  students: Student[];


  constructor() { 
    this.students = new Array<Student>(
      new Student(1, "Vasya", 19, 380455215, "205", "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"),
      new Student(2, "Petya", 20, 380545215, "333", "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"),
      new Student(3, "Anton", 22, 38455215, "444", "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"),
      new Student(4, "Kiril", 15, 38054545215, "205", "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"),
      new Student(5, "Kent", 23, 3805545215, "333", "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg")
    );
  }


  getStudent() : Student[]{
    return this.students;
  }

  newStudent(student: Student){
    this.students.push(student);
  }
}
