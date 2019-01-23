import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  
  model = {}
  constructor(private httpService: HttpService, private router: Router) { }

  passFormControl = new FormControl('', [Validators.required,]);
  hide =true;

 
  ngOnInit() {
  }
  login() {
    // console.log(this.model);
    this.httpService.postRequest('login', this.model).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);
    }, err => {
      alert('Something went wrong');
    })
  }
  Register() {
    this.httpService.postRequest('register', this.model).subscribe(data => {
      console.log(data);
      this.router.navigate(['register']);
    }, err => {
      alert('Something went wrong');
    })
  
  }

}