import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Models/user'
@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<Users[]> {
        return this.http.get<Users[]>('http://localhost:5000/users');
    }
}