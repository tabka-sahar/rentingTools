import { Component, OnInit , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}
  user = {
    username: 'khalil hamzaoui',
    phone_number: 25485966,
    email: 'khlail@gmail.com',
    adrress: 'ariana cité elghazala',
  };

  ngOnInit(): void {}
 

}
