import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Tools from '../Models/tool';
import { TollsService } from '../services/tolls.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  tools: Tools[] = [];

  constructor(private tollsService: TollsService) {}

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
}
