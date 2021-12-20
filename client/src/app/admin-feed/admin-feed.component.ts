import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Tools from '../Models/tool';
import { TollsService } from '../services/tolls.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-feed',
  templateUrl: './admin-feed.component.html',
  styleUrls: ['./admin-feed.component.css']
})
export class AdminFeedComponent implements OnInit {
  tools: Tools[] = [];


  constructor(private tollsService: TollsService, private http: HttpClient) { }


  ngOnInit(): void {
    this.tollsService.getTolls().subscribe((tools) => {
      this.tools = tools;
      console.log(this.tools);
      this.tools.forEach(
        (tool) => (tool.createdAt = moment(tool.createdAt).fromNow())
      );
    });
  }
  availableOrNot(index: any) {
    if (this.tools[index].available === true) {
      this.tools[index].available = false;
    } else if (this.tools[index].available === false) {
      this.tools[index].available = true;
    }
  }
  deleteTool(_id:string) {
    const url =`http://localhost:5000/admin/feed/${_id}`

    console.log(_id)
    return this.http.delete(url).subscribe(() => {
      this.ngOnInit()
      console.log('selected tool deleted')
    })
  
  }
}


