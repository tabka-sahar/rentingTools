import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email: string=""
password: string=""
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  postData(){
    console.log(this.email);
    
    let url = "http://localhost:5000/admin/login"
    this.http.post(url,{
      email:this.email,
      password:this.password
    }).toPromise().then((data:any)=>{console.log(data) ;if (data.msg==="this user doesn't exist"){alert("this user doesn't exist")}
  if(data.msg==="Wrong password"){alert('Wrong password')}else{console.log(data)
  };
  })
    
  }
}
