import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupComponent } from './signup.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) {}

  // insertData() {
  //   const body = JSON.stringify({username: '', fullname: '', email: '',phone_number:'', password:});
  //   return this.http.post('http://localhost:5000/users/signup', body, httpOptions);
  // }

}