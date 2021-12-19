import { Component,SimpleChanges, OnChanges, OnInit, SimpleChange, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PassingDataService } from '../passing-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   email: string=""
password: string=""
error:any=""
userdata:any=""
constructor(private http:HttpClient, private passData:PassingDataService){
}
ngOnInit(): void {
    this.passData.communicateMessage(this.userdata)
}
postData(){
  console.log(this.email);
  
  let url = "http://localhost:5000/users/login"
  this.http.post(url,{
    email:this.email,
    password:this.password
  }).toPromise().then((data:any)=>{ if (data.msg==="this user doesn't exist"){alert("this user doesn't exist")}
if(data.msg==="Wrong password"){alert('Wrong password')}else{this.userdata=data};
})
  
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
