import {
  Component,
  SimpleChanges,
  OnChanges,
  OnInit,
  SimpleChange,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PassingDataService } from '../passing-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: any = '';
  state: object = {};
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}
  postData() {
    console.log(this.email);
// this is a function that will check if a user is really in the database or not , when the username is wrong it will give an error
//user does not exist if it exists and the password is wrong it will give an error password is wrong , if its correct it 
// will get you to the profile page with all of the user's data
    let url = 'http://localhost:5000/users/login';
    this.http
      .post(url, {
        email: this.email,
        password: this.password,
      })
      .toPromise()
      .then((data: any) => {
        if (data.msg === "this user doesn't exist") {
          this.error = "this user doesn't exist";
        } else if (data.msg === 'Wrong password') {
          this.error = 'Wrong password';
        } else {
          this.state = data.user;
          console.log(this.state);
          this.router.navigate(['/user'], { state: this.state });
        }
      });
  }
  //this is a function that upon clicking the forgot password it will send you an email with a link in it that it will direct you to another page so u can reset ur password
  forgot() {
    let url = 'http://localhost:5000/users/f';
    this.http
      .post(url, {
        email: this.email,
      })
      .subscribe(() => {
        console.log('hi');
      });
  }
  log(event: any) {
    this.email = event;
  }
  log1(event: any) {
    this.password = event;
  }
}
