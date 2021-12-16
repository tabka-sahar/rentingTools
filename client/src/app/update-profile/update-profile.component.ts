import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  constructor() {}
  user = {
    fullname: 'khalil hamzaoui',
    username: '@khalil_HZ',
    phone_number: 25485966,
    email: 'khlail@gmail.com',
    adrress: 'ariana cité elghazala',
  };
  ngOnInit(): void {}
}
