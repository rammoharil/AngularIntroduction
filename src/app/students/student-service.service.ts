import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) {
  }

  getStudentsData() {
    return this.http.get('assets/data/students.json');
  }
}
