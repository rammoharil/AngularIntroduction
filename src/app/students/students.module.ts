import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditStudentsComponent } from './edit-students/edit-students.component';



@NgModule({
  declarations: [
    HomeComponent,
  AddNewStudentComponent,
   StudentsTableComponent,
   EditStudentsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule, SharedModule
  ]
})
export class StudentsModule { }
