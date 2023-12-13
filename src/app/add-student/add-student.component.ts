import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm!:FormGroup
    id=0
  constructor(private acr : ActivatedRoute){

  }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id']
    this.studentForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required]),
      gender:new FormControl(this.id,Validators.required),
    })
  }
  get name(){return this.studentForm.get('name')}
  get email(){return this.studentForm.get('email')}
  get gender(){return this.studentForm.get('gender')}
  add(){
    console.log("my form"+JSON.stringify(this.studentForm.value))
  }

}
