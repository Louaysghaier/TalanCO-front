import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceData } from '../formentrpdata.model'; 

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resourceData: ResourceData = {
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onresourcesDataEmitted = new EventEmitter<ResourceData>();

  emitResourceData() {
    this.onresourcesDataEmitted.emit(this.resourceData);
  }

  submitResourcesData() {
    this.emitResourceData();
    console.log(this.resourceData);
  }
}
