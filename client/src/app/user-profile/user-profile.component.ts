import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PassingDataService } from '../passing-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TollsService } from '../services/tolls.service';
import Tools from '../Models/tool';
import * as moment from 'moment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor(
    private http: HttpClient,
    private passData: PassingDataService,
    private router: Router,
    private tollsService: TollsService
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.state);
    this.user = this.state._id || '';
  }
  state: any = {};
  tools: Tools[] = [];
  post: any = {
    title: '',
    description: '',
    price: '',
    categorie: '',
    pictures: [''],
  };

  editProfile() {
    this.router.navigate(['/user/update'], { state: this.state });
  }

  addPost() {
    let sent = this.post;
    sent.user = this.user;
    sent.pictures = [sent.pictures];
    console.log(sent);
    this.tollsService
      .post_a_toll(sent)
      .subscribe(() => console.log('tool added'));
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.tollsService
      .getTolls_of_one_user(this.state._id)
      .subscribe((tools: Tools[]) => {
        this.tools = tools;
        this.tools.forEach(
          (tool) => (tool.createdAt = moment(tool.createdAt).fromNow())
        );
        console.log(this.tools);
      });
  }

  availableOrNot(index: any, bool: boolean) {
    if (this.tools[index].available === true) {
      this.tools[index].available = false;
    } else if (this.tools[index].available === false) {
      this.tools[index].available = true;
    }
    this.tollsService.tool_available_or_not(index, !bool);
  }

  deleteTool(_id: String) {
    const url = `http://localhost:5000/admin/feed/${_id}`;
    console.log(_id);
    return this.http.delete(url).subscribe(() => {
      this.ngOnInit();
      console.log('selected tool deleted successfully');
    });
  }
}
