import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherCompComponent } from './myWork/teacher-comp/teacher-comp.component';
import { FormsModule } from '@angular/forms';
import { NewTeatherComponent } from './myWork/new-teather/new-teather.component';//add4

@NgModule({
  declarations: [
    AppComponent,
    TeacherCompComponent,
    NewTeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //add4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
