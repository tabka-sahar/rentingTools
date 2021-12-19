import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { PassingDataService } from '../passing-data.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor( private passData:PassingDataService) {}
  user = {
    fullname: '',
    username: '@khalil_HZ',
    phone_number: 25485966,
    email: 'khlail@gmail.com',
    adrress: 'ariana cité elghazala',
  };

  ngOnInit(): void {
    this.passData.sendMessage.subscribe((message:any)=>{
this.user.fullname=message.fullname
console.log(this.user.fullname);

    })
  }
 
}
