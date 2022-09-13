import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms' ; 
import {HttpClient} from '@angular/common/http' ;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  signUpForm: FormGroup ;
  obj:any ;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.obj = this.http.get('http://127.0.0.1:8000/oauth/list-users').subscribe(data => this.obj = data) ; 

    this.signUpForm = new FormGroup({
      firstName: new FormControl(null , Validators.required),
      lastName: new FormControl(null, Validators.required), 
      username : new FormControl(null , Validators.required),
      mobileNumber: new FormControl(null , Validators.required) ,
      city: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      age : new FormControl(null, Validators.required),
      firstPassword: new FormControl(null, Validators.required),
      secondPassword : new FormControl(null, Validators.required)
    }) ; 
  }

  onSubmit(){
    console.log("Working") ; 
    
  }

}
