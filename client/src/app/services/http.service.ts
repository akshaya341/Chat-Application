import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:3000/api/"
  static postRequest: any;
  constructor(private http: HttpClient) { }

  postRequest(url, data) {
    console.log(data);
    
    return this.http.post(this.baseUrl + url, data);
  }
}
