import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user = {
    _id: 1452,
    fullname: 'khalil hamzaoui',
    username: '@khalil_HZ',
    phone_number: 25485966,
    email: 'khlail@gmail.com',
    adrress: 'ariana cité elghazala',
  };
  updateMyprofile = () => {
    console.log('data');
    let url = `http://localhost:5000/users/update/${this.user._id}`;
    this.http.put(url, this.user).subscribe((data) => {
      console.log(data);
    });
  };
  ngOnInit(): void {}
}
