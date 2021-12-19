import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import Tools from '../Models/tool';
import { TollsService } from '../services/tolls.service';
import { DataService } from '../services/data.servece';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  tools: Tools[] = [];
  constructor(private tollsService: TollsService, private data: DataService) {}
  selectedTool?: Tools;
  newMessage() {
    if (this.selectedTool) {
      console.log(this.selectedTool);
      this.data.changeMessage(this.selectedTool);
    }
  }
  onSelect(tool: Tools): void {
    this.selectedTool = tool;
    this.newMessage();
  }

  ngOnInit(): void {
    this.tollsService.getTolls().subscribe((tools) => {
      this.tools = tools;
      console.log(this.tools);
      this.tools.forEach(
        (tool) => (tool.createdAt = moment(tool.createdAt).fromNow())
      );
    });
    if (this.selectedTool) {
      this.data.currentMessage.subscribe(
        (selectedTool) => (this.selectedTool = selectedTool)
      );
    }
  }

  availableOrNot(index: any) {
    if (this.tools[index].available === true) {
      this.tools[index].available = false;
    } else if (this.tools[index].available === false) {
      this.tools[index].available = true;
    }
  }
}
