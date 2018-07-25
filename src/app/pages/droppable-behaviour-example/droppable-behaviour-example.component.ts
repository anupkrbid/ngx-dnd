import { Component, OnInit } from '@angular/core';

interface CurrentDraggingBox {
  name: string;
  index: number;
  moveFrom: string;
}

@Component({
  selector: 'app-droppable-behaviour-example',
  templateUrl: './droppable-behaviour-example.component.html',
  styleUrls: ['./droppable-behaviour-example.component.css']
})
export class DroppableBehaviourExampleComponent implements OnInit {
  currentDraggingBox: CurrentDraggingBox;
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

  onDragStart(
    event: PointerEvent,
    boxName: string,
    moveFrom: string,
    boxIndex: number
  ) {
    this.currentDraggingBox = {
      name: boxName,
      index: boxIndex,
      moveFrom: moveFrom
    };
  }

  move(dropzone: string) {
    this[`${dropzone}Boxes`].push(this.currentDraggingBox.name);
    this[`${this.currentDraggingBox.moveFrom}Boxes`].splice(
      this.currentDraggingBox.index,
      1
    );
  }
}
