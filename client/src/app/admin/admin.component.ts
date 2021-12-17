import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  title: string = '';
		description:  string = '';
		price: string = '';
		categorie: string = '';
		pictures: string = '';

  constructor(private http: HttpClient) { }

  deletePost() {
    let url = "http://localhost:5000/users/posts"
    this.http.delete(url).subscribe(data => {
      console.log(data);
    });
  }
  
  }
