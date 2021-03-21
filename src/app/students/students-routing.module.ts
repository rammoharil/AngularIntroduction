import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { HomeComponent } from './home/home.component';
import { StudentsTableComponent } from './students-table/students-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: EditStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class StudentRoutingModule { }
