import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit {
  studentData: any;
  constructor(private sharedService: SharedserviceService) { }

  ngOnInit(): void {
    this.studentData = this.sharedService.getStudentsObject();
  }

}
