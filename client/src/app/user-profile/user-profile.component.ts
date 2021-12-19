import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { PassingDataService } from '../passing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor( private passData:PassingDataService, private router:Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    console.log(this.state);
    this.fullname=this.state.fullname
    this.email=this.state.email
    this.phonenumber=this.state.phonenumber
    this.adrress=this.state.adrress
    
  }
  state:any={}
  fullname:any=""
  username:any=""
  phonenumber:any=""
  email:any=""
  adrress:any="" 
  
  ngOnInit(): void {
  }}
 
