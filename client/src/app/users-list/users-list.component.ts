import { Component, OnInit } from '@angular/core';
import User from '../Models/user';
import { USersService } from '../services/users.servisces';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: USersService) {}
  users: User[] = [];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }
  banne(id: String) {
    this.usersService.banne_a_user(id);
  }
  allow(id: String) {
    this.usersService.unbanne_a_user(id);
  }
}
