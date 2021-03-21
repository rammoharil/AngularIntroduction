import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsTableComponent } from '../students-table/students-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@ViewChild(StudentsTableComponent, {static: false}) tableComponent: StudentsTableComponent;
  constructor() { }

  ngOnInit(): void {
  }

  setStudentData(studentData: any) {
    this.tableComponent.setStudentsData(studentData);
  }

}
