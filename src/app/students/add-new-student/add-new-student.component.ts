import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
@Output() setStudentData = new EventEmitter<any>();
rollNumber: number;
studentName: string;
studentEmail: string;
  constructor() { }

  ngOnInit(): void {
  }

  addNewStudent(): void {
    const studentData: any = {};
    studentData.name = this.studentName;
    studentData.email = this.studentEmail;
    studentData.rollNumber = this.rollNumber;
    this.setStudentData.emit(studentData);
    this.clearData();
  }

  clearData(): void {
    this.studentEmail = '';
    this.studentName = '';
    this.rollNumber = null;
  }

  isAddnewDisabled(): boolean {
    let isDisabled = false;
    if (!this.studentEmail || !this.studentName || !this.rollNumber) {
      isDisabled = true;
    }
    return isDisabled;
  }

}
