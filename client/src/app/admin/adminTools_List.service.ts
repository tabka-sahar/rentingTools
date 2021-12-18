import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable()
export class AdminTools {
  url : any;
  
 

  constructor(private http: HttpClient) { }
  getTools() {
    this.url = "http://localhost:5000/admin/delete"
     
      
  }
  

}
  
  
