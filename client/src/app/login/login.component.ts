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

   email: string=""
password: string=""
error:any=""
state:object= {};
constructor(private http:HttpClient, private router:Router){
}
ngOnInit(): void {
}
postData(){
  console.log(this.email);
  
  let url = "http://localhost:5000/users/login"
  this.http.post(url,{
    email:this.email,
    password:this.password
  }).toPromise().then((data:any)=>{ if (data.msg==="this user doesn't exist"){this.error="this user doesn't exist"}
else if(data.msg==="Wrong password"){this.error='Wrong password'}else{this.state={fullname:data.user.fullname,email:data.user.email,phonenumber:data.user.phone_number,adrress:data.user.adrress}
console.log(this.state);

 this.router.navigate(['/user'],{state:this.state})}})

}
forgot(){
  
  let url = "http://localhost:5000/users/f"
  this.http.post(url,{
    email:this.email
      }).subscribe( ()=>{  console.log("hi")}   )

}
log(event:any){
this.email=event
  
}
log1(event:any){
  this.password=event
    
  }
}
