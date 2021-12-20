import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class USersService {
  static getolls_of_one_user: any;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5000/users');
  }

  banne_a_user(id: String) {        
    let url = `http://localhost:5000/users/${id}`;
    return this.http.patch(url, { verified: false });
  }

  unbanne_a_user(id: String) {
    let url = `http://localhost:5000/users/${id}`;
    return this.http.patch(url, { verified: true });
  }
}
