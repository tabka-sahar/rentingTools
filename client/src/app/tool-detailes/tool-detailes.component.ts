import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.servece';
import { Subscription } from 'rxjs';
import Tools from '../Models/tool';

@Component({
  selector: 'app-tool-detailes',
  templateUrl: './tool-detailes.component.html',
  styleUrls: ['./tool-detailes.component.css'],
})
export class ToolDetailesComponent implements OnInit {
  constructor(private data: DataService) {}
  selectedTool!: Tools;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (selectedTool) => (this.selectedTool = selectedTool)
    );
    console.log(this.selectedTool);
  }
}
