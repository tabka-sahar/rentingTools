import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/user'
import { UsersService } from '../services/users.service'



@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: Users[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    })
  }
  bannedUser() {
   
  }
}
 


