import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupService } from './signupService';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor(private signupService: SignupService) { }

  username: string = '';
  fullname: string = '';
  email: string = '';
  phone_number: number = 0
  password: string = '';
  Username(event: any) {
    this.username=event
    
  }
  Fullname(event: any) {
    this.username=event
    
  }
  Email(event: any) {
    this.username=event
    
  }
  Phone_number(event: any) {
    this.username=event
    
  }
  Password(event: any) {
    this.username=event
    
  }
  




 
  // myInsert() {
  //   this.signupService.insertData().subscribe(
  //     response => console.log(response),
  //     err => console.log(err)
  //   );
  // }
}
 
 
 


