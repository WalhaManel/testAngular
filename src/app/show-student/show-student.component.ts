import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit{

  studentlist:Student[]=[
    {
      "id": 1,
      "name": "Jack",
      "email": "jack@gmail.com",
      "gender": "male"
    },
    {
      "id": 2,
      "name": "Peter",
      "email": "peter@gmail.com",
      "gender": "male"
    },
    {
      "id": 3,
      "name": "Mary",
      "email": "mary@gmail.com",
      "gender": "female"
    },
    {
      "id": 4,
      "name": "Smith",
      "email": "smith@gmail.com",
      "gender": "male"
    },
    {
      "id": 5,
      "name": "John",
      "email": "john@gmail.com",
      "gender": "male"
    }
  ]
  id = 0;
  constructor(private activaterouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'];}

}
