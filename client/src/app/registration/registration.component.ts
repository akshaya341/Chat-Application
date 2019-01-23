import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  password: string;


  model = {}
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
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