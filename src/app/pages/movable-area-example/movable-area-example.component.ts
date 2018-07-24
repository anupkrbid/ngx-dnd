import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movable-area-example',
  templateUrl: './movable-area-example.component.html',
  styleUrls: ['./movable-area-example.component.css']
})
export class MovableAreaExampleComponent implements OnInit {
  boxes: any[] = [];

  constructor() {}
  ngOnInit() {}

  addNewBox() {
    this.boxes.push({
      label: 'New Trapped Box',
      resetOnDragEnd: false
    });
  }

  addNewResetBox() {
    this.boxes.push({
      label: 'New Trapped Reset Box',
      resetOnDragEnd: true
    });
  }
}
