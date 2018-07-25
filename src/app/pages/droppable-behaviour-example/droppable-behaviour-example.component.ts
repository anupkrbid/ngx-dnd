import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-droppable-behaviour-example',
  templateUrl: './droppable-behaviour-example.component.html',
  styleUrls: ['./droppable-behaviour-example.component.css']
})
export class DroppableBehaviourExampleComponent implements OnInit {
  availableBoxes = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
    'Box 6',
    'Box 7',
    'Box 8'
  ];
  dropzone1Boxes = ['Dropzone 1 Box'];
  dropzone2Boxes = ['Dropzone 2 Box'];
  constructor() {}

  ngOnInit() {}
}
