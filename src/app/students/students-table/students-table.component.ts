import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  studentsData: any[] = [];
  constructor(private sharedService: SharedserviceService, private route: Router, private studentsService: StudentServiceService) { }

  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData(): void {
    this.studentsService.getStudentsData().subscribe((studentsData: any) => {
      this.studentsData = studentsData.studentsData;
    });
  }

  setStudentsData(data: any): void {
    this.studentsData.push(data);
  }

  editStudent(studentData: any): void {
    this.sharedService.setStudentsObject(studentData);
    this.route.navigate(['details']);
  }

  deleteStudent(index: number): void {
    this.studentsData.splice(index, 1);
    alert('Student data deleted successfully');
  }

}
