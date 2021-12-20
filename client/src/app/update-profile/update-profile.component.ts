import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  state: any = {};
  constructor(private http: HttpClient, private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  user = {
    fullname: this.state.fullname,
    username: this.state.username,
    phone_number: this.state.phone_number,
    email: this.state.email,
    adrress: this.state.adrress,
  };
//this is the function used to update the user profile
  updateMyprofile = () => {
    console.log('data');
    let url = `http://localhost:5000/users/update/${this.state._id}`;
    this.http.put(url, this.user).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  };

  ngOnInit(): void {
    console.log('=======>', this.state);
  }
}
