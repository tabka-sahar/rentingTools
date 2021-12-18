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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: any = '';
  constructor(private http: HttpClient) {}
  connected = {};
  @Output() event = new EventEmitter<string>();
  postData() {
    console.log(this.email);
    let url = 'http://localhost:5000/users/login';
    this.http
      .post(url, {
        email: this.email,
        password: this.password,
      })
      .toPromise()
      .then((data: any) => {
        if (data.msg === "this user doesn't exist") {
          alert("this user doesn't exist");
        }
        if (data.msg === 'Wrong password') {
          alert('Wrong password');
        } else {
          this.connected = data.user;
          console.log(this.connected);
        }
      });
  }
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
