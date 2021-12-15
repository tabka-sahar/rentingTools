import { Component,SimpleChanges, OnChanges, OnInit, SimpleChange, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   name: string=""
password: string=""
constructor(private http:HttpClient){
}
postData(){
  console.log(name);
  
  let url = "http://localhost:5000/post"
  this.http.post(url,{
    name:this.name,
    password:this.password
  }).subscribe((data)=>{console.log(data);
  })
}
log(event:any){
this.name=event
  
}
log1(event:any){
  this.password=event
    
  }
}
