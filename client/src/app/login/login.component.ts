import { Component,SimpleChanges, OnChanges, OnInit, SimpleChange, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   email: string=""
password: string=""
constructor(private http:HttpClient){
}
postData(){
  console.log(this.email);
  
  let url = "http://localhost:5000/users/forgot/update"
  this.http.post(url,{
    email:this.email,
    password:this.password
  }).subscribe((data)=>{console.log(data);
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
