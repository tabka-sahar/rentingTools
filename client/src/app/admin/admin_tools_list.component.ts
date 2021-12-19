import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Injectable from '@angular/core'
import {Observable} from 'rxjs'

// @Injectable() {
//   proovidedIn:'root'
// }

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })

export class ListToolComponent{ 
  url : string = "http://localhost:5000/admin/delete"
 
   
    constructor(private http: HttpClient) { }
  // getTools(): Observable<Tools[]> {
  //   return this.http.get<Tools[]>(this.url)
     
      
  // }
  // deleteTools(id:any) {
  //   return this.http.delete<Tools>(this.url+id)
  // }
 
  }
  


 
  
