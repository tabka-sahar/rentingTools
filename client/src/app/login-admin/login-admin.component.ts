import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  email: string=""
password: string=""
error: any = '';

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  //the login function for the admin , it will check  your admin database to see if the user and the password is really there , if they are not 
  //it will give an error , if they are it wil redirect you to the admin feed component 
  postData(){
    console.log(this.email);
    let url = "http://localhost:5000/admin/login"
    this.http.post(url,{
      email:this.email,
      password:this.password
    }).toPromise().then((data:any)=>{console.log(data) ;if (data.msg==="this user doesn't exist"){ this.error = "this user doesn't exist";
  }
  else if(data.msg==="Wrong password"){this.error = 'Wrong password';}else{
    this.router.navigate(['/admin/users']);
  
  };
  })
    
  }
}
