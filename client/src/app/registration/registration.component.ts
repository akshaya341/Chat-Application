import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  First_Name: string;
  Last_Name: string;
  Mobile_Number: Number;
  Email: string;

  constructor() { }

  ngOnInit() {
  }

}
