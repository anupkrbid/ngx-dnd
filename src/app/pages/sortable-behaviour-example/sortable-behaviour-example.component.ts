import { Component, OnInit, Input } from '@angular/core';

import { DraggableDirective } from '../../shared/drag-and-drop/directives/draggable.directive';
import { SortEvent } from '../../shared/drag-and-drop/directives/sortable-list.directive';

@Component({
  selector: 'app-sortable-behaviour-example',
  templateUrl: './sortable-behaviour-example.component.html',
  styleUrls: ['./sortable-behaviour-example.component.css']
})
export class SortableBehaviourExampleComponent implements OnInit {
  sortableList = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
    'Box 6',
    'Box 7',
    'Box 8',
    'Box 9',
    'Box 10'
  ];
  constructor() {}

  ngOnInit() {}

  sort(event: SortEvent) {
    const current = this.sortableList[event.currentIndex];
    const swapWith = this.sortableList[event.newIndex];

    this.sortableList[event.currentIndex] = swapWith;
    this.sortableList[event.newIndex] = current;
  }
}
