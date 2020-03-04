import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" novalidate> 

      <input name="firstName" ngModel required #firstName="ngModel">
      <input name="lastName" ngModel required #lastName="ngModel">


      <button>Submit</button>


    </form>


    <p>First name value: {{firstName.value}}</p>
    <p>First name valid: {{firstName.valid}}</p>
    <p>form value: {{myForm.value | json}}</p>
    <p>form valid: {{myForm.valid}}</p>

  
  
  `,
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { 
  }


  onSubmit(myForm: NgForm){

    console.log(myForm.value);
    console.log(myForm.value.firstName);

    console.log(myForm.value.firstName);
  }

  ngOnInit(): void {
  }

}
