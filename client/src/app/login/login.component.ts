import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  Email: string;
  password: string;

  model = {}
  constructor(private httpService: HttpService, private router: Router) { }

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

}
