import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Tools from '../Models/tool';

@Injectable({
  providedIn: 'root',
})
export class TollsService {
  static getolls_of_one_user: any;
  constructor(private http: HttpClient) {}

  getTolls(): Observable<Tools[]> {
    return this.http.get<Tools[]>('http://localhost:5000/tools');
  }
  



  getTolls_of_one_user(id: String): Observable<Tools[]> {
    return this.http.get<Tools[]>(`http://localhost:5000/tools/${id}`);
  }

  post_a_toll(post: any) {
    let url = 'http://localhost:5000/tools';
    return this.http.post(url, post).subscribe(() => {
      console.log('tool added');
    });
  }
}
