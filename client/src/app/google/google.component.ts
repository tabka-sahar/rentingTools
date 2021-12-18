import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private http:HttpClient) { }
  get(){ let url = "http://localhost:5000/sucess"
  this.http.get(url).subscribe( ()=>{  console.log("hi")}   );
  }

  ngOnInit(): void {this.get()
  }
  // forgot(){
  
  //   let url = "http://localhost:5000/users/f"
  //   this.http.post(url,{
  //     email:this.email
  //       }).subscribe( ()=>{  console.log("hi")}   )
  
  // }
}
