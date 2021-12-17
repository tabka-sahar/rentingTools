import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import Tools from '../Models/tool';
import { TollsService } from '../services/tolls.service'; 


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools: Tools[] = [];

  constructor(private tollsService: TollsService) { }

  ngOnInit(): void {
    this.tollsService.getTolls()
    .subscribe(tools => {
      this.tools = tools ;
    })
  }

}
