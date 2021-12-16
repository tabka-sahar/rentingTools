import { Component } from '@angular/core';
import { SignupService } from './signup/signupService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private signupService: SignupService) { }
  myInsert() {
    this.signupService.insertData().subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }

  // title = 'rentingTools';
}
